import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import AdminHome from './AdminHome.vue'
import AsideMenu from './AsideMenu.vue'
import { Roles } from 'meteor/alanning:roles'


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
      meta: { requiresAuth: true }
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
    {
      path: '/admin',
      name: 'adminHome',
      // beforeEnter: checkIsAdmin,
      components: {
        default: AdminHome,
        asideMenu: AsideMenu,
      },
      meta: {
        requiresAuth: true,
        roles: ['admin']
      }
    },
  ],
})


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !Meteor.userId()) {
    next('/login');
  } else if (to.path === '/login' && Meteor.userId()) {
    next('/');
  } else if (to.path === '/signup' && Meteor.userId()) {
    next('/');
  }else {
    next();
  }
});