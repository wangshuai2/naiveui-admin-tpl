import { createRouter, createWebHistory } from 'vue-router'
import { BASE_ROUTES } from './routes/bases.routes'
import type { App } from 'vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: BASE_ROUTES
})

export const setupRouter = async (app: App) => {
  app.use(router)
  await router.isReady()
}
