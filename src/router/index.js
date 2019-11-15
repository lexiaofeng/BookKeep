import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/register.vue'
import Reset from '../views/reset.vue'
import Personal from '../views/personal.vue'
import Cal_account from '../views/cal_account.vue'
import Zhangdan from '../views/zhangdan.vue'
import Mingxi from '../views/mingxi.vue'
import Bill from '../views/bill.vue'
import Zhangbu from '../views/zhangbu.vue'
import Create from '../views/create.vue'
import Info from '../views/info.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    
    component: Register
  },
  {
    path: '/reset',
    name: 'reset',
    
    component: Reset
  },
  {
    path: '/personal',
    name: 'personal',
    
    component: Personal
  },
  {
    path: '/account',
    name: 'cal_account',
    
    component: Cal_account
  },
  {
    path: '/zhangdan',
    name: 'zhangdan',
    
    component: Zhangdan
  },
  {
    path: '/mingxi',
    name: 'mingxi',
    
    component: Mingxi
  },
  {
    path: '/bill',
    name: 'bill',
    
    component: Bill
  },
  {
    path: '/zhangbu',
    name: 'zhangbu',
    
    component: Zhangbu
  },
  {
    path: '/create',
    name: 'create',
    
    component: Create
  },
  {
    path: '/info',
    name: 'info',
    
    component: Info
  },
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
