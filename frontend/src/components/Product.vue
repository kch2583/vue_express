<template>
  <div>
    <subMenu pageName="Products" pageimagename="leatherFabric3.jpg"></subMenu>
    <v-container class="Products mt-3">
      <v-card style="background-color:transparent;" elevation="9">
        <v-container>
          <v-card
            class="mx-auto"
            style="background-color:transparent;"
            flat
            v-for="(Tag, index) in Tags"
            :key="index"
          >
            <v-card-title>{{ Tag.title }}</v-card-title>
            <v-card-text>
              <v-chip-group multiple column active-class="primary--text">
                <v-chip
                  filter
                  v-for="tag in Tag.tags"
                  :key="tag"
                  @click="selected(Tag,tag)"
                >{{ tag }}</v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
          <v-text-field
            class="mt-9"
            label="Search"
            placeholder="숫자만 입력하세요 ex) 1080"
            v-model="searchN"
            outlined
            append-icon="fas fa-search"
          ></v-text-field>
        </v-container>
      </v-card>

      <!-- v-show="!this.Products" -->
      <v-card
        v-show="!this.Products.length"
        class="mt-12"
        style="background-color:transparent;"
        elevation="8"
      >
        <p class="display-1 pa-12 text-center">데이터가 없습니다.</p>
      </v-card>
      <v-row v-show="this.Products">
        <v-col v-for="item in calData" :key="item.id" cols="6" sm="3">
          <router-link :to="{ name: 'ProductDetail', params: { id : item._id } }">
            <v-hover>
              <template v-slot="{ hover }">
                <v-card class="pa-2" :elevation="hover ? 24 : 6">
                  <v-card-title>{{ item.number }}</v-card-title>
                  <v-img height="400px">{{ item.image }}</v-img>
                  <v-card-text>{{ item.img }}</v-card-text>
                  <v-card-text>{{ item.pattern }} | {{ item.color }}</v-card-text>
                </v-card>
              </template>
            </v-hover>
          </router-link>
        </v-col>
      </v-row>

      <!-- pagination -->
      <v-pagination v-model="curPageNum" circle :length="numOfPages"></v-pagination>
    </v-container>
  </div>
</template>
<script>
import subMenu from './subMenu.vue';
export default {
  components: {
    subMenu,
  },
  data: () => ({
    searchN: '',
    page: 1,
    Products: [],
    dataPerPage: 12, //한 페이지당 보여지는 리스트의 갯수
    curPageNum: 1, //현재 ui에 보여지고 있는 페이지의 숫자
    Tags: [
      {
        title: 'Pattern Filter',
        name: 'PatternTag',
        tags: [
          'no-pattern',
          'difigne',
          'sdf',
          'Food',
          'Drawers',
          'Shopping',
          'Art',
          'Tech',
          'Creative Writing',
        ],
      },
      {
        title: 'Color Filter',
        name: 'ColorTag',
        tags: ['black', 'white', 'blue', 'red', 'yellow', 'sdf'],
      },
    ],
    selectedPattern: [],
    selectedColor: [],
  }),
  created() {
    this.$http.get('/api/Products').then(response => {
      this.Products = response.data;
    });
  },

  computed: {
    startOffset() {
      return (this.curPageNum - 1) * this.dataPerPage;
    },
    endOffset() {
      return this.startOffset + this.dataPerPage;
    },
    numOfPages() {
      return Math.ceil(this.Products.length / this.dataPerPage);
    },
    calData() {
      if (this.searchN) {
        return this.Products.filter(i => {
          return i.number.includes(this.searchN);
        });
      } else if (
        this.selectedPattern.length !== 0 ||
        this.selectedColor.length !== 0
      ) {
        if (
          this.selectedPattern.length !== 0 &&
          this.selectedColor.length !== 0
        ) {
          return this.Products.filter(i => {
            return (
              this.selectedPattern.includes(i.pattern) &&
              this.selectedColor.includes(i.color)
            );
          });
        } else {
          return this.Products.filter(i => {
            return (
              this.selectedPattern.includes(i.pattern) ||
              this.selectedColor.includes(i.color)
            );
          });
        }
      } else {
        return this.Products.slice(this.startOffset, this.endOffset);
      }
    },
  },
  methods: {
    selected(Tag, tag) {
      switch (Tag.name) {
        case 'PatternTag':
          if (this.selectedPattern.indexOf(tag) !== -1) {
            this.selectedPattern.splice(tag, 1);
          } else {
            this.selectedPattern.push(tag);
          }
          break;
        case 'ColorTag':
          if (this.selectedColor.indexOf(tag) !== -1) {
            this.selectedColor.splice(tag, 1);
          } else {
            this.selectedColor.push(tag);
          }
          break;
      }
    },
  },
};
</script>