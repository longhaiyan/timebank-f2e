// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routerInit from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './styles/main.less'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: routerInit(store),
  store,
  template: '<App/>',
  components: { App }
})
