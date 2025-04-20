import { createRouter, createWebHistory } from 'vue-router'
import LaddingPage from '../views/LaddingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LaddingPage,
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../views/Cadastro.vue'),
    },
  ],
})

export default router
