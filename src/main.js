import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'

// 导入 Cuberto Mouse Follower CSS
import 'mouse-follower/dist/mouse-follower.min.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
