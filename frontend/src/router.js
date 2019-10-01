import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import ProductDetail from './views/ProductDetail.vue'
import ContactUs from './views/ContactUs.vue'

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
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
    }

  ]
})
