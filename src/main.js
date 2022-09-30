import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import WaveUI from 'wave-ui'

/*import './assets/main.css' */
import './assets/adam.css'
import 'wave-ui/dist/wave-ui.css'

const app = createApp(App)

new WaveUI(app, {
    //Wave UI options.
  })

app.use(createPinia())
app.use(router)

app.mount('#app')
