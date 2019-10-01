<template>
  <v-container class="Products">
    <v-row>
      <v-col v-for="item in calData" :key="item.id" cols="12" sm="4">
        <router-link :to="{ name: 'ProductDetail', params: { id : item.number } }">
          <v-card class="pa-2">
            <v-card-title> {{ item.number }} </v-card-title>
            <!-- <v-img></v-img> -->
            <v-card-text> {{ item.img }} </v-card-text>
            <v-card-text> {{ item.pattern }} | {{ item.color }} </v-card-text>
          </v-card>
        </router-link>
      </v-col>
    </v-row>

    <!-- pagination -->
    <v-pagination v-model="curPageNum" circle :length="numOfPages">
    </v-pagination>  

  </v-container>
</template>
<script>
export default {
  data: () => ({
    page:1,
    Products: [],
    dataPerPage: 6, //한 페이지당 보여지는 리스트의 갯수
    curPageNum: 1, //현재 ui에 보여지고 있는 페이지의 숫자
  }),
  created () {
    this.$http.get('/api/Products')
    .then((response) => {
      this.Products = response.data    
    })
  },
  computed: {
      startOffset() {
      return ((this.curPageNum -1) * this.dataPerPage);
    },
    endOffset() {
      return (this.startOffset + this.dataPerPage);
    },
    numOfPages() {
      return Math.ceil(this.Products.length / this.dataPerPage);
    },
    calData() {
      return this.Products.slice(this.startOffset, this.endOffset)
    }
  },
}
</script>
<style lang="scss">
  .Products {
    background: lightgreen;
  }
</style>