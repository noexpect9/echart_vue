import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引用适配
import 'lib-flexible/flexible.js'
// 引入echarts

createApp(App).use(store).use(router).mount('#app')
