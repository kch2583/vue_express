import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import 'es6-promise/auto'
import store from './vuex/store'
import VueSession from 'vue-session'


Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VueSession)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
