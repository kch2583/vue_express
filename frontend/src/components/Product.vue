<template>
<div>
<subMenu pageName="Products" pageimagename="leatherfabric3.jpg"></subMenu>
  <v-container class="Products mt-3">
    <SelectChips
    :Tags = "Tags"
    ></SelectChips>
   
    <v-text-field
      label="Search"
      placeholder="숫자만 입력하세요 ex) 1080"
      persistent-hint
      v-model="searchN"
      outlined
      append-icon="fas fa-search"
      
    >
    </v-text-field>

    <v-card v-show="!this.Products"> 데이터가 없습니다. </v-card>
    <v-row v-show="this.Products">
      <v-col v-for="item in calData" :key="item.id" cols="6" sm="4">
        <router-link :to="{ name: 'ProductDetail', params: { id : item._id } }">
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
  </div>
</template>
<script>
import { eventBus } from '../main.js'
import SelectChips from '../components/SelectChips'
import subMenu from './subMenu.vue'
export default {
  components:{
    subMenu,
    SelectChips,
  },
  data: () => ({
    searchN: "",
    page:1,
    Products: [],
    dataPerPage: 12, //한 페이지당 보여지는 리스트의 갯수
    curPageNum: 1, //현재 ui에 보여지고 있는 페이지의 숫자
    Tags: [
      { title: "Pattern Filter",
      name:'PatternTag',
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
      ]},
    { title: "Color Filter",
    name:'ColorTag',
      tags: [
      'black',
      'white',
      'blue',
      'red',
      'yellow',
      'sdf'
    ]}
    ]
      
    
   
  }),
  created () {
    this.$http.get('/api/Products')
    .then((response) => {

      this.Products = response.data    
    })
    eventBus.$on("filteredProducts", (filteredProducts) => {
      this.Products = filteredProducts
      
      
    })
      eventBus.$on("searchedNumber", (searchedNumber) => {
      this.Products = searchedNumber
      
      
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
      if (this.searchN) {
        return this.Products.filter(i => {
          return i.number.includes(this.searchN)
        })  
      }
      else{
        return this.Products.slice(this.startOffset, this.endOffset)
      }
     
    },
    
  },
}
</script>
<style lang="scss">

</style>