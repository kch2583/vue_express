<template>
<div id="TopMenuBar">

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
  #TopMenuBar {
    background: salmon;  
    height:50px;
    font-weight: bold;
  }

  #MainLogo {
    display: inline-block;
  }
  #MenuList { 
    
    list-style-type: none;
    float: right;
  }
  #TopMenuBar li {
    display: inline-block;
    padding: 12px 20px;
  }
  .MenuIcon {
    float:right;
  }
  .MenuLists {
    text-decoration: none;
    color:black;
  }
  .MenuLists:hover {
    color: rgb(122,87,150);
  }
  .router-link-active {
    color: rgb(122,87,150);
  }
</style>