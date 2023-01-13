import { createApp } from 'vue'
import App from './App.vue'
import { makeServer } from './server'

createApp(App)
.use(makeServer)
.mount('#app')
