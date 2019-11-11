import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import AboutUs from './views/AboutUs.vue'
import Products from './views/Products.vue'
import ProductDetail from './views/ProductDetail.vue'
import ContactUs from './views/ContactUs.vue'



import admin from './views/admin.vue'
import AdminSettings from './views/AdminSettings.vue'
import UserManagementPage from './components/AdminPage/UserManagementPage'
import AdminLogin from './components/AdminPage/AdminLogin'
// import AdminTab from './components/AdminPage/AdminTab'
import ProductManagementPage from './components/AdminPage/ProductManagementPage'



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
      alias:"/Products",
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
      
      components: {
        default: admin,
        Login: AdminLogin
      },
      props: true,
      children:[
        {
          path: 'settings',
          // name: 'settings',
          component: AdminSettings,
          children:[
            {
              path: 'user',
              name: 'UserManagement',
              component: UserManagementPage,
            },
            {
              path: 'product',
              name: 'ProductManagement',
              component: ProductManagementPage,
            },
          ]
        },

        
        
      ]
    },
    


  ]
})
