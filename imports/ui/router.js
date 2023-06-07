import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./About.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./Signup.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./Login.vue'),
    },
  ],
})
