import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import AsideMenu from './AsideMenu.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        asideMenu: AsideMenu,
      },
      meta : { requiresAuth: true}
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
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./Login.vue'),
    },
  ],
})


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth &&!Meteor.userId()) {
    next('/login');
  } else if (to.path === '/login' && Meteor.userId()) {
    next('/');
  } else if (to.path === '/signup' && Meteor.userId()) {
    next('/login');
  } else {
    next();
  }
});
