<template>
  <v-app >
    <v-content class="app">
      <div v-if="$route.path.indexOf('/admin')">
        <TopMenuBar/>
        <router-view ></router-view>
        <Footer/>
      </div>
      <div v-else>
        <router-view></router-view>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import TopMenuBar from './components/TopMenuBar';
import Footer from './components/Footer';

export default {
  name: 'App',
  data: () => ({
    

  }),
  components: {
    
    TopMenuBar,
    Footer
  },
  computed: {
  },
  
};
</script>
<style lang="scss">
  // .app {
  //   background: lightskyblue;
  // }
</style>