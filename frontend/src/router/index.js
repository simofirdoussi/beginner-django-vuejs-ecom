import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Checkout from '../views/Checkout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:product_slug/',
    name:'Product',
    component: Product,
  },
  {
    path: '/cart',
    name:'Cart',
    component: Cart,
  },
  {
    path: '/checkout',
    name:'Checkout',
    component: Checkout,
  },
  {
    path: '/signup',
    name:'Signup',
    component: Signup,
  },
  {
    path: '/login',
    name:'Login',
    component: Login,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
