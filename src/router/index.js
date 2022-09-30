import { createRouter, createWebHistory } from 'vue-router'
import MainListingView from '../views/MainListingView.vue'
import LoginView from '../views/LoginView.vue'
import { stateMgr } from '../stores/data'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainListingView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach(async (to, from) => {
  if ( !stateMgr.authenticated && to.name !== 'login'
  ) {
    return { name: 'login' }
  }
})

export default router
