// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
Vue.use(VueResource)
Vue.use(Vuex)

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.component('my-tops', require('./components/tpls/Tops.vue'))
Vue.component('my-footer', require('./components/tpls/Footer.vue'))

new Vue({
  el: '#app',
  router,
  filters: {
    toUpchar: function (value) {
      if (!value) return ''
      return value + 'ss'
    }
  },
  template: '<App/>',
  components: { App }
})
