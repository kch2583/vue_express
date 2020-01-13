<template>
  <div>
    <v-tabs background-color="transparent" id="tabs" class="ma-5">
      <v-tab disabled class="headline">{{ Logo }}</v-tab>
      <v-spacer></v-spacer>
      <v-tab
        v-for="menu in Menunames"
        :key="menu.id"
        :to="{path:menu.path}"
        class="hidden-sm-and-down font-weight-black headline mr-8"
      >{{ menu.name }}</v-tab>

      <div class="MenuIcon hidden-md-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn tile large icon v-on="on">
              <i class="material-icons right">menu</i>
            </v-btn>
          </template>
          <v-list>
            <div v-for="menu in Menunames" :key="menu.id">
              <router-link :to=" {path:menu.path } " class="MenuLists">
                <v-list-item>{{ menu.name }}</v-list-item>
              </router-link>
            </div>
          </v-list>
        </v-menu>
      </div>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      Logo: '준비중',
      Menunames: [
        { id: 0, name: 'Home', path: '/' },
        { id: 1, name: 'About Us', path: '/AboutUs' },
        { id: 2, name: 'Products', path: '/Products' },
        { id: 3, name: 'Contact Us', path: '/ContactUs' },
      ],
    };
  },
};
</script>
<style lang="scss">
#tabs {
  position: absolute;
  z-index: 3;
}
</style>