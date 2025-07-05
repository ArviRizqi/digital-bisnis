import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/views/ProductView.vue'),
  },
  {
    path: '/review',
    name: 'review',
    component: () => import('@/views/ReviewView.vue'),
  },
  {
    path: '/try-ai',
    name: 'try-ai',
    component: () => import('@/views/BannerView.vue'),
  },
  {
    path: '/our-team',
    name: 'our-team',
    component: () => import('@/views/OurteamView.vue'),
  },
  {
    path: '/footer',
    name: 'footer',
    component: () => import('@/views/FooterView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
