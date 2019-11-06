import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import test from '../views/test.vue'
import works from '../views/works.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '*',
    redirect: Home    
  },
  {
    path:'/works',
    name: 'works',
    component: works
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
