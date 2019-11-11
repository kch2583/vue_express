<template>
<v-container>
<div>
  <v-alert 
  :value="value"
  :type="type"
  dismissible
  >
  {{ message }}
  </v-alert>

  <v-form v-model="valid">
   <v-container>
     <v-row justify="center">
        <v-col cols="12" sm="7">
          <v-text-field label="USERID" v-model="userID" :rules="userIDRule" required>
          </v-text-field>  
        </v-col>
        <v-col cols="12" sm="7">
          <v-text-field type="password" label="PASSWORD" v-model="password" :rules="passwordRule" reuqired>
          </v-text-field>  
        </v-col>
        <v-col cols="12" sm="7">
    <v-btn block outlined color="primary" @click="login({userID, password})">
      SUBMIT
    </v-btn>
        </v-col>
     </v-row>
   </v-container>
   
 </v-form>






</div>
</v-container>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  data: () => ({
    valid: true,
    what:{},
    userID: '',
    userIDRule: [v => !!v || 'userID is required'],
    password: '',
    passwordRule: [v => !!v || 'password is required'],
    error: null,

    name:'',
    userID:'',
    password:'',
    grade:'B',
    // value: false,
    // type:"",
    // message:"",

  }),
  computed: 
    mapState({
      
      type: (state) => state.type,
      message : (state) => state.message,
      value : (state) => state.value
    })
  ,
  methods: {
    ...mapActions(["login"]),
    // submit() {
    //   this.$http.post('/api/admin',
    //     { 
    //       userID: this.userID, 
    //       password: this.password
    //       }).then((response) => {
    //           this.$session.start();
    //           this.$session.set('jwt', response.body.token)
    //           this.$http.headers.common['Authorization'] = 'Bearer ' + response.body.token
    //           this.$router.push('/admin/settings'); 
            
             
    //       }).catch(function (error) {
    //         console.log(error);
    //       });
    // },
   
  
    // async submit() {
    //   try{
    //     AuthenticationService.login({
    //       userID : this.userID,
    //       password: this.password
    //     })

    //   } catch(error){
    //     this.error = error.response.data.error
    //   }
      

    // }
  },
}
</script>
<style lang="scss">

</style>