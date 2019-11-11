<template>
  <div class="Admin">
    <router-view></router-view>
    <div class="Login" v-if="$route.path.indexOf('/admin/settings')">
      <router-view name="Login"></router-view>
    </div>
  </div>
</template>
<script>
// import AdminLogin from '../components/AdminPage/AdminLogin'

export default {
  components: {
    // AdminLogin
  }

}
</script>