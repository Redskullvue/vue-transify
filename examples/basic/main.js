import { createApp } from 'vue'
import App from './app.vue'

// Import the styles in main.js + Use the Component in you project (app.vue)
import '../../src/styles/animations.css'

const app = createApp(App)
app.mount('#app')
