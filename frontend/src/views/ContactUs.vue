<template>

  <div class="pt-12">
    <subMenu pageName="Contact us" pageimagename="PAC-10004512.jpg"></subMenu>
    <v-card width="100%" class="pa-2" flat color="transparent"> 
      
      <v-row >
        
        <v-col>
          <div   id="box" >
          <h1 class="mb-4">주식회사 대현 eot</h1>
          <h3>주소 경기도 포천시 가산면 너배기길 90</h3>
          <h3>전화 031-542-2583</h3>
          <h3>대표 전화 010-9025-8855</h3>
          </div>
          <v-col border><KakaoMap/></v-col>
          </v-col>
      </v-row>
    </v-card>
    </div>


</template>
  
<script>
import KakaoMap from '../components/KakaoMap'
import subMenu from '../components/subMenu.vue'

export default {
  components: {
    KakaoMap,
    subMenu
    },
}
</script>
<style lang="scss">
  p {
  
    padding: 20px 50px 8px;
    border-bottom: 2px black solid
  }
  #box {
    margin: 0px 40px 40px
  }
</style>
