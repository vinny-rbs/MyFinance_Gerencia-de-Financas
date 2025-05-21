import { createRouter, createWebHistory } from 'vue-router'
import LaddingPage from '../views/LaddingPage.vue'
import DefaultNotification from '@/components/ui/DefaultNotification.vue'

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
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard.vue'),
      beforeEnter: (to, from, next) => {
        const user = JSON.parse(localStorage.getItem('user') || 'null')
        if (user && user.id) {
          next()
        } else {
          next('/')
          window.dispatchEvent(
            new CustomEvent('notify', {
              detail: 'Faça o Login para acessar a seu Dashboard',
            }),
          )
        }
      },
    },
  ],
})

export default router
