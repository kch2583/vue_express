<template>
  <v-tabs v-model="activeTab">
    <v-tab to="/admin/settings">Main</v-tab>
    <v-tab to="/admin/settings/user">User</v-tab>
    <v-tab to="/admin/settings/product">Product</v-tab>
    <v-tab>
      <v-btn @click="logout">
        logout
      </v-btn>
    </v-tab>
    
  </v-tabs>

  
</template>
<script>
export default {
  data() {
    return {
      activeTab:''
    }
  },
  methods: {
    logout: function () {
      
      this.$store.state.token = ''
      
      
      confirm("로그아웃 되었습니다.")
      this.$router.push('/admin')
    },
  }
}
</script>