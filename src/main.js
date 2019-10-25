import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入文件的时候，默认导入的是目录下的索引文件（index.js index.vue index.json）。
// import router from '/src/router/index.js'
import router from '@/router'
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  // el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
