<template>
  <div>
    <v-img :src="pageimg" height="300"></v-img>
    <p class="display-2 font-weight-black pageName">{{ pageName }}</p>
  </div>
</template>
<script>
export default {
  props: ['pageName', 'pageimagename'],
  data() {
    return {
      pageimg: require('../../public/img/' + this.pageimagename),
    };
  },
};
</script>
<style lang="scss">
.pageName {
  padding: 20px 50px 8px;
  border-bottom: 2px black solid;
}
</style>
