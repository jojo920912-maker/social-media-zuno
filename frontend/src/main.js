import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import naive from 'naive-ui'
import axios from 'axios'

import App from '@/App.vue'
import router from '@/router'

axios.defaults.baseURL = 'https://social-media-53bm.onrender.com'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)

app.mount('#app')
