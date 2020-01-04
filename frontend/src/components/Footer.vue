<template>
  <v-footer padless>
    <v-card width="100%" flat tile class="indigo litghten-1 text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text">
        회사명 : 주식회사 대현
        <br />사업자번호 : 203-129-245463
        <br />주소 : 경기도 포천시 가산면 너배기길 90
        <br />대표자 : 김땡땡
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>Copyright 2020. 주식회사 대현 Corp. All Right Reserved.</v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram',
    ],
  }),
};
</script>
<style lang="scss">
</style>