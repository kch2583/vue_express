<template>
 <v-form v-model="valid">
   <v-container>
     <v-row justify="center">
        <v-col cols="12" sm="7">
          <v-text-field label="USERNAME" v-model="username" :rules="usernameRule" required>
          </v-text-field>  
        </v-col>
        <v-col cols="12" sm="7">
          <v-text-field type="password" label="PASSWORD" v-model="password" :rules="passwordRule" reuqired>
          </v-text-field>  
        </v-col>
        <v-col cols="12" sm="7">
    <v-btn block outlined color="primary" @click="submit">
      SUBMIT
    </v-btn>
        </v-col>
     </v-row>
   </v-container>
 </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    username: '',
    usernameRule: [v => !!v || 'Username is required'],
    password: '',
    passwordRule: [v => !!v || 'password is required'],

  }),
  methods: {
    submit() {
      this.$http.post('/api/admin', { username: this.username})
      .then((response) => {
        this.$router.push("/admin/settings");
        
      })
      .catch(function (error) {
        console.log(error);
    });
    }
  },
}
</script>
<style lang="scss">

</style>