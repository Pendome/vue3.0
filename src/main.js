import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import '/@assets/style/global.scss'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
