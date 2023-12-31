import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import AdminHome from './AdminHome.vue'
// import AsideMenu from './AsideMenu.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        // asideMenu: AsideMenu,
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
      path: '/unauthorized',
      name: 'unauthorized',
      component: () => import('./Unauthorized.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'unauthorized',
      component: () => import('./Unauthorized.vue'),
  },
    {
      path: '/admin',
      name: 'adminHome',
      // beforeEnter: checkIsAdmin,
      components: {
        default: AdminHome,
        // asideMenu: AsideMenu,
      },
      meta: {
        requiresAuth: true,
      }
    },
  ],
})
router.beforeEach((to, from, next) => {
  // const adminId = 'BXBvNPQwnnq2PFi64';
  // const role = Meteor.user().profile.role;
  const userId = Meteor.userId();
  if (to.meta.requiresAuth && !userId) {
    next('/login');
  } else if (to.path === '/login' && userId) {
    next('/');
  } else if (to.path === '/signup' && userId) {
    next('/');
  } else if (to.path === '/' && userId && Meteor.user().profile.role === 'keelaAdmin') {
    next('/admin');
  } else if (to.path === '/admin' && userId && Meteor.user().profile.role !== 'keelaAdmin') {
    next('/unauthorized');
  } else {
    next();
  }
});