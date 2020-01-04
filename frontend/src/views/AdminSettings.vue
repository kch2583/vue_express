<template>
  <div>
    <AdminTab/>
    <div v-if="$route.path == '/admin/settings'">
    <UserManagementPage/>
    <ProductManagementPage/>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import AdminTab from '../components/AdminPage/AdminTab'
import UserManagementPage from '../components/AdminPage/UserManagementPage'
import ProductManagementPage from '../components/AdminPage/ProductManagementPage'
export default {
  components: {
    AdminTab,
    UserManagementPage,
    ProductManagementPage
  },
    beforeCreate: function () {
    if (!this.$store.state.token) {
      confirm('로그인이 필요합니다.')
      this.$router.push('/admin')
    }
  },
}
</script>