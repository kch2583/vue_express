<template>
  <div class="Home">
   
    <v-card align="center" justify="center">
      <v-img id="homeImg" :src=HomeImage height="1000" >
      <v-card-text class="white--text pa-6 mt-10">
        Facebook will follow Instagram by hiding the number of likes on users' posts during a trial in Australia.
        From Friday, some Australian users will no longer be able to see the number of likes - or reactions - on another person's Facebook post.
        The controversial change has been trialled by sister platform Instagram in several countries since July.
        Facebook said removing likes from view was an attempt to reduce social pressure among users.
        People will still be able to see the number of likes on their own posts, the company said.
      </v-card-text>
      </v-img>
    </v-card>
     <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-row align="center" justify="center">
        <h1>준비중</h1>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  data: () => ({
    HomeImage: require('/vuenode/frontend/public/img/fabric2.jpg')
  })
}
</script>

<style lang="scss">
  #homeImg {
    z-index : 2;
    
  }
</style>