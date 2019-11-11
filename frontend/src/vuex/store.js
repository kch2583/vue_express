import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    isLoginError : false,
    type:'success',
    message:'',
    value: false,
    token:''
  },
  getters: {

  },
  mutations: {
    LoginSuccess(state){
      state.isLogin = true
      state.isLoginError = false
    },
    LoginFailed(state){
      state.isLoginError = true
      state.isLogin = false
    },
    Logout(state){
      if(state.token){
        state.token = ''
        alert('로그아웃 되었습니다.')
      }
    },

    LoginCheck(state){
      axios.post('/api/auth/check', {
        headers: {
          "x-access-token" : state.token
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch(error => {
        alert('로그인이 필요합니다.')
        router.push('/admin');
      })
    }

  },
  actions:{
    login({state, commit}, user) {
      axios.post('/api/auth/login', user)
        .then((response) => {
          console.log(response.data);
          if(response.data.token) {
            state.token = response.data.token
            router.push('/admin/settings')     
          } else {
            state.value = response.data.value
            state.type = response.data.type
            state.message = response.data.message
          }
        })
        .catch(error => {
          console.log(error);
        })
      
    }
  }
})