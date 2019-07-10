// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import store from './store'
import 'mint-ui/lib/style.css'
import './assets/css/reset.css'
import fastclick from 'fastclick'
import axios from 'axios'
import qs from 'qs'
import 'lib-flexible'
import common from './common'

Vue.config.productionTip = false
Vue.use(MintUI)
fastclick.attach(document.body) // body内去除300毫秒延迟
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs

for(let i in common){
  Vue.component(i,common[i])
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
