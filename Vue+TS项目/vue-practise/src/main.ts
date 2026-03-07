import { createApp } from 'vue'
import App from './App.vue'
import pinia from './stores'
import { setupRouter } from './router'
import 'normalize.css'
import '@/assets/css/index.css'

const app = createApp(App)

app.use(pinia)

await setupRouter(app)

app.mount('#app')
