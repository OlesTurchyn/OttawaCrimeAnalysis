import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/arson',
      name: 'arson',
      component: () => import('../views/ArsonView.vue'),
    },
    {
      path: '/assault',
      name: 'assault',
      component: () => import('../views/AssaultView.vue'),
    },
    {
      path: '/break-and-enter',
      name: 'break-and-enter',
      component: () => import('../views/BreakAndEnterView.vue'),
    },
    {
      path: '/hit-and-run',
      name: 'hit-and-run',
      component: () => import('../views/HitAndRunView.vue'),
    },
    {
      path: '/motor-theft',
      name: 'motor-theft',
      component: () => import('../views/MotorTheftView.vue'),
    },
    {
      path: '/possession',
      name: 'possession',
      component: () => import('../views/PossessionView.vue'),
    },
    {
      path: '/sexual-violations',
      name: 'sexual-violations',
      component: () => import('../views/SexualViolationsView.vue'),
    },
    {
      path: '/shootings',
      name: 'shootings',
      component: () => import('../views/ShootingsView.vue'),
    },
    {
      path: '/theft-over-5000',
      name: 'theft-over-5000',
      component: () => import('../views/TheftOver5GrandView.vue'),
    },
  ],
})

export default router
