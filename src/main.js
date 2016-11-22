import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueRouter)
Vue.use(VueMaterial)

const router = new VueRouter({})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: {App}
})
