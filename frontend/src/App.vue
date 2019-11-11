<template>
  <v-app style="background:#f3f1ec">
    <v-content class="app">
      <div v-if="$route.path.indexOf('/admin')">
        
        <TopMenuBar/>
        <router-view></router-view>
        <Footer/>
      </div>
      <div v-else>
        <Admin/>
        <!-- <router-view></router-view> -->
      </div>
    </v-content>
  </v-app>
</template>

<script>
import TopMenuBar from './components/TopMenuBar';
import Footer from './components/Footer';
import Admin from './views/admin'

export default {
  name: 'App',
  data: () => ({
    

  }),
  components: {
    Admin,
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