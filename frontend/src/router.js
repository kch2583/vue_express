import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import AboutUs from './views/AboutUs.vue'
import Products from './views/Products.vue'
import ProductDetail from './views/ProductDetail.vue'
import ContactUs from './views/ContactUs.vue'
import admin from './views/admin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/AboutUs.vue')
    },
    {
      path: '/Products',
      name: 'products',
      component: Products,
      props: true,
    },
    {
      path: '/Products/:id',
      name: 'ProductDetail',
      component: ProductDetail,
      props: true,
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs,
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
    },


  ]
})
