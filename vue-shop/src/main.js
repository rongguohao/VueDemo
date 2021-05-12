import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'

import './plugins/element.js'

import axios from 'axios'

axios.defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
