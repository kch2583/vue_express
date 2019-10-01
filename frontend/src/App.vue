<template>
  <v-app >
    <v-content class="app">
      <TopMenuBar/>
      
      <router-view></router-view>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import TopMenuBar from './components/TopMenuBar';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    
    TopMenuBar,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
  // .app {
  //   background: lightskyblue;
  // }
</style>