<template>
  <div class="Home">
    <v-card align="center" justify="center">
      <v-img id="homeImg" :src="HomeImage" height="1000">
        <div class="homeInfo">
          <v-card-title class="display-3 font-weight-black"
            >회사 이름</v-card-title
          >
          <v-card-title class="display-1">
            제품보러가기
            <v-icon>fas fa-arrow-right</v-icon>
          </v-card-title>
        </div>
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
    HomeImage: require('../../public/img/fabric2.jpg'),
  }),
};
</script>

<style lang="scss">
#homeImg {
  z-index: 2;
}
.homeInfo {
  // text-shadow: -1px 0 black,0 1px black,1px 0 black,0 -1px black;
  margin: 300px;
}
</style>
