import { createApp } from 'vue'
import './styles/_!import.scss'
import App from './App.vue'

import { inject } from '@vercel/analytics'

inject()

async function prepareWorker() {
  const { worker } = await import('./server/server')

  return worker.start()
}

const app = createApp(App)

prepareWorker().then(() => {
  app.mount('#app')
})
