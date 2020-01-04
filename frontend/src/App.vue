<template>
  <v-app
    style="background:#f3f1ec; font-family: 'S-CoreDream-8Heavy'!important"
  >
    <v-content class="app" style="font-family: 'S-CoreDream-8Heavy'!important">
      <div v-if="$route.path.indexOf('/admin')">
        <TopMenuBar />
        <router-view></router-view>
        <Footer />
      </div>
      <div v-else>
        <Admin />
        <!-- <router-view></router-view> -->
      </div>
    </v-content>
  </v-app>
</template>

<script>
import TopMenuBar from './components/TopMenuBar';
import Footer from './components/Footer';
import Admin from './views/admin';
export default {
  name: 'App',
  data: () => ({}),
  components: {
    Admin,
    TopMenuBar,
    Footer,
  },
  computed: {},
};
</script>
<style lang="scss">
div.v-application {
  font-family: 'S-CoreDream-8Heavy' !important ;
  .title {
    // To pin point specific classes of some components
    font-family: 'S-CoreDream-8Heavy' !important ;
  }
  .headline {
    // To pin point specific classes of some components
    font-family: 'S-CoreDream-8Heavy' !important ;
  }
  .display-1 {
    font-family: 'S-CoreDream-8Heavy' !important ;
  }
  .display-3 {
    font-family: 'S-CoreDream-8Heavy' !important ;
  }
}
.v-application .headline {
  // To pin point specific classes of some components
  font-family: 'S-CoreDream-8Heavy' !important ;
}
</style>
