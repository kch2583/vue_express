<template>
  <div class="Home">
    <v-card align="center" justify="center">
      <v-img
        id="homeImg"
        :src="HomeImage"
        height="700"
        gradient="to top right, rgba(255,255,255,.1),rgba(255,255,255,.9)"
      >
        <v-container>
          <v-row>
            <v-col cols="12" class="homeInfo">
              <v-card-title class="display-3 font-weight-black">회사 이름</v-card-title>
              <v-card-title class="display-1">
                제품보러가기
                <v-icon>fas fa-arrow-right</v-icon>
              </v-card-title>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-card>

    <v-container my-12>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.id" cols="6" sm="3">
          <v-card
            style="background-color:transparent;"
            elevation="0"
            justify="center"
            align="center"
            class="pa-9"
          >
            <v-icon outlined size="100">{{ card.image }}</v-icon>
            <v-card-text>{{ card.text }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-parallax :src="parallaxImage" height="300">
      <v-row align="center" justify="center">
        <h1>준비중</h1>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  data: () => ({
    HomeImage: require('../../public/img/leatherFabric4.jpg'),
    parallaxImage: require('../../public/img/factory.jpg'),
    cards: [
      {
        id: 0,
        image: 'fas fa-cogs',
        text: 'djeifsl jejfsi  ejfiowf knvozknf ijf,xve',
      },
      {
        id: 1,
        image: 'fab fa-pagelines',
        text: 'foijaa woi wifns ijw qinfklsfiw  jfiwof',
      },
      {
        id: 2,
        image: 'fas fa-users',
        text: 'wiej fjsoivkcownkxo jiwo ofiwn ',
      },
      {
        id: 3,
        image: 'far fa-lightbulb',
        text: 'sie jsie ejo esjiof ejiofs',
      },
    ],
  }),
};
</script>

<style lang="scss">
#homeImg {
  z-index: 2;
}
.homeInfo {
  // text-shadow: -1px 0 black,0 1px black,1px 0 black,0 -1px black;
  margin-top: 300px;
}
</style>
