import { useCreatePinia } from './stores/index'
import { createApp } from 'vue'

import App from './App.vue'
import { setupRouter } from './router'

import 'normalize.css'
import 'virtual:uno.css'

async function setupApp() {
  const app = createApp(App)

  useCreatePinia(app)

  await setupRouter(app)

  app.mount('#app')
}

setupApp()
