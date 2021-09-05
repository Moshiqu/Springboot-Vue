import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 导入less
import less from 'less'
// 导入全局CSS
import '@/assets/css/global.css'

createApp(App).use(store).use(router).use(ElementPlus,{
    locale: zhCn,
}).use(less).mount('#app')
