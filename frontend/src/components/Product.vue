<template>
<div>
<subMenu pageName="Products" pageimagename="leatherfabric3.jpg"></subMenu>
  <v-container class="Products mt-3">
    <SelectChips/>
    <v-row>
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
import SelectChips from '../components/SelectChips'
import subMenu from './subMenu.vue'
export default {
  components:{
    subMenu,
    SelectChips
  },
  data: () => ({
    page:1,
    Products: [],
    dataPerPage: 12, //한 페이지당 보여지는 리스트의 갯수
    curPageNum: 1, //현재 ui에 보여지고 있는 페이지의 숫자
   
  }),
  created () {
    this.$http.post('/api/Products')
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

</style>