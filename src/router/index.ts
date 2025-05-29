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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/product',
      name: 'product',

      component: () => import('../views/ProductView.vue'),
    },
    {
      path: '/review',
      name: 'review',

      component: () => import('../views/ReviewView.vue'),
    },
    {
      path: '/try-ai',
      name: 'try-ai',

      component: () => import('../views/BannerView.vue'),
    },
    {
      path: '/footer',
      name: 'footer',

      component: () => import('../views/FooterView.vue'),
    },
  ],
})

export default router
