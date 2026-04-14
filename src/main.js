import { createApp } from 'vue'
import router from './router'
import './style.css'
import './assets/performance.css' // 性能优化CSS
import App from './App.vue'

// 导入 Cuberto Mouse Follower CSS
import 'mouse-follower/dist/mouse-follower.min.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
