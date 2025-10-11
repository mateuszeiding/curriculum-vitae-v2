import { createApp } from 'vue'
import './styles/_!import.scss'
import App from './App.vue'

async function prepareWorker() {
  const { worker } = await import('./server/server')

  return worker.start()
}
const app = createApp(App)

const palette = ['gray', 'gold', 'red', 'blue', 'green', 'purple'] as const
const index = (Math.random() * palette.length) | 0
const currentPalette = palette[index]
document.documentElement.setAttribute('data-palette', currentPalette ?? palette[0])

prepareWorker().then(() => {
  app.mount('#app')
})
