<template>
<div class="pt-12">
  <subMenu pageName='Product' pageimagename="leatherfabric3.jpg"></subMenu>
    <v-container class="Products">
    <v-row>
      <v-col width="80%" class="pt-12">
        <v-card class="pa-2" v-for="details in ProductDetail" :key="details._id">
          <v-card-title> {{ details.number }} </v-card-title>
          <!-- <v-img></v-img> -->
          <v-card-text> {{ details.image }} </v-card-text>
          <v-card-text> <div> {{ details.pattern }} | {{ details.color }} </div></v-card-text>  
        </v-card>
      </v-col>
    </v-row>
    <ProductCarousel/>
  </v-container>
  </div>
</template>
<script>
import subMenu from '../components/subMenu'
import ProductCarousel from '../components/ProductCarousel'

export default {
  name: 'productDetail',
  components:{
    subMenu,
    ProductCarousel
  },
    data: () => {
      return {
        ProductDetail: {},
        Detail: {}
      }
    },
    watch: {
    // 라우트가 변경되면 메소드를 다시 호출
    '$route': function(ChangeItem){
      var id = this.$route.params.id
    this.$http.get(`/api/Products/${id}`)
    .then((response) => {
      this.ProductDetail = response.data
    })
    }
  },
  created() {
    var id = this.$route.params.id
    this.$http.get(`/api/Products/${id}`)
    .then((response) => {
      this.ProductDetail = response.data
    })
  },
}
</script>
<style lang="scss">
  
</style>