import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from '@/api'
import '@/styles/index.less'
// plugin插件

// 导入文件的时候，默认导入的是目录下的索引文件（index.js index.vue index.json）。
// import router from '/src/router/index.js'
import router from '@/router'
import plugin from '@/components'

Vue.use(plugin)
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  // el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
