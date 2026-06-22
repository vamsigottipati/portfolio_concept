import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import test from '../views/test.vue'
import works from '../views/works.vue'
import NProgress from 'nprogress'

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
    path: '/works',
    name: 'works',
    component: works
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes
})

router.beforeResolve((to, _, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
