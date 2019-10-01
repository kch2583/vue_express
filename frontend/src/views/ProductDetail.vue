<template>
    <v-container class="Products">
    <v-row>
      <v-col width="80%">
        <v-card class="pa-2">
          <v-card-title> {{ ProductDetail[0].number }} </v-card-title>
          <!-- <v-img></v-img> -->
          <v-card-text> {{ ProductDetail[0].img }} </v-card-text>
          <v-card-text> {{ ProductDetail[0].pattern }} | {{ ProductDetail[0].color }} </v-card-text>  
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'productDetail',
    data: () => {
    return {
      ProductDetail: "hi"
    }
    },

  created () {
    var id = this.$route.params.id
    this.$http.get(`/api/Products/${id}`)
    .then((response) => {
      this.ProductDetail = response.data
    })
  

  }
}
</script>
<style lang="scss">
  
</style>