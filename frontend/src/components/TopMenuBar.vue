<template>
<div>

<!-- 
<div id="TopMenuBar" class="transparant">
        <div id="MainLogo" class="ma-3"> {{ Logo }} </div>    
        

        <ul id="MenuList" class="hidden-sm-and-down">
          <li v-for="menu in Menunames" :key="menu.id" class="MenuLists">
            <router-link :to=" {path:menu.path } " class="MenuLists">
              {{ menu.name }}
            </router-link>  
          </li>
        </ul>

      <v-spacer class="hidden-md-and-up MenuIcon"></v-spacer>
    
      <div class="MenuIcon hidden-md-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn tile large icon v-on="on">
              <i class="material-icons right">menu</i>
            </v-btn>  
          </template>
          <v-list>
            <v-list-item v-for="menu in Menunames" :key="menu.id" >
              <v-list-item-title>
                <router-link :to=" {path:menu.path } " class="MenuLists">
                  {{ menu.name }}
                </router-link>  
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

  </div> -->
  <div>
      <v-tabs id='tabs' background-color="transparent" color="indigo darken-4">
        <v-tab disabled> {{ Logo }} </v-tab>
        <v-spacer></v-spacer>
        <v-tab v-for="menu in Menunames" :key='menu.id' :to="{path:menu.path}" 
        class="hidden-sm-and-down font-weight-black"> 
          {{ menu.name }} 
        </v-tab>

        <div class="MenuIcon hidden-md-and-up">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn tile large icon v-on="on">
                <i class="material-icons right">menu</i>
              </v-btn>  
            </template>
            <v-list>
              <div v-for="menu in Menunames" :key="menu.id" >
                <router-link :to=" {path:menu.path } " class="MenuLists">
                  <v-list-item>
                    {{ menu.name }}
                  </v-list-item>
                </router-link>  
              </div>
              
            </v-list>
          </v-menu>
        </div>
      </v-tabs>
    

 
  </div>
</div>
</template>

<script>
export default {
  data: function(){
    return {
      Logo: "준비중",
      Menunames: [
        { id: 0, name: "Home" , path:"/"},
        { id: 1, name: "About Us" , path:"/AboutUs"},
        { id: 2, name: "Products" , path:"/Products"},
        { id: 3, name: "Contact Us" , path:"/ContactUs"}
      ]
    }
    
  }
  
}
</script>
<style lang="scss">
  #tabs {
    position:absolute;
    z-index: 3
  }
</style>