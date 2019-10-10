<template>
<v-container>
    <v-card width="100%" class="pa-2 center" flat> 
      <v-row>
        <v-col><KakaoMap/></v-col>
        <v-col>
          <h1>주식회사 대현</h1>

          <h3>ADDRESS. 경기도 포천시 가산면 너배기길 90</h3>
          <h3>TEL. 031-542-2583</h3>
          <h3>PHONE. 010-9025-8855</h3>
          </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import KakaoMap from '../components/KakaoMap'

export default {
  components: {
    KakaoMap
    }
}
</script>
<style lang="scss">

  
</style>
