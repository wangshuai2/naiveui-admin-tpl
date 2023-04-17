import type { RouteRecordRaw } from 'vue-router'

export const BASE_ROUTES: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue')
  }
]
