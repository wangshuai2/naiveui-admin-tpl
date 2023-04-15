import { createPinia } from 'pinia'
import PiniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import type { App } from 'vue'

const pinia = createPinia()
pinia.use(PiniaPluginPersistedstate)

export const useCreatePinia = (app: App): void => {
  app.use(pinia)
}
