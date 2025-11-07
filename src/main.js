import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Création du store Pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) // Activation du plugin

app.use(pinia)
app.use(router)

app.mount('#app')
