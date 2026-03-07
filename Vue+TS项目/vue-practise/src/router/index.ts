import useLoginStore from '@/stores/login/login'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/home.vue'),
    },
    {
      path: '/login',
      component: () => import('@/views/login/login.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFound/NotFound.vue'),
    },
  ],
})

export async function setupRouter(app: any) {
  const loginStore = useLoginStore()
  await loginStore.getUserCacheInfo()
  app.use(router)
}

export default router
