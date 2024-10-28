import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import { registerPlugins } from '@core/utils/plugins'

// Styles
import '@core/scss/template/index.scss'
import '@styles/styles.scss'

// Create vue app
const app = createApp(App)
const pinia = createPinia()


// Register plugins
registerPlugins(app)

// Register Pinia
app.use(pinia)

// Mount vue app
app.mount('#app')
