import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
  },
  {
    path: '/garden',
    name: 'Garden',
    component: () => import(/* webpackChunkName: "garden" */ '../views/Garden.vue')
  },
  {
    path: '/mitax',
    name: 'Mitax',
    component: () => import(/* webpackChunkName: "mitax" */ '../views/Mitax.vue')
  },
  {
    path: '/steamer',
    name: 'Steamer',
    component: () => import(/* webpackChunkName: "steamer" */ '../views/Steamer.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

routes.push(
  {
    path: '/*',
    name: '404',
    component: () => import(/* webpackChunkName: "error" */ '../views/Error.vue')
  },
  {
    path: '/error/:code',
    name: 'Error',
    component: () => import(/* webpackChunkName: "error" */ '../views/Error.vue')
  }
)

console.log(process.env.BASE_URL, "@@ BASE_URL");

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
