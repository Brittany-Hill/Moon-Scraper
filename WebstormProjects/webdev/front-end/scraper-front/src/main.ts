import  './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'
const app = createApp(App)

app.use(plugin, defaultConfig())
app.use(router)

app.mount('#app')
