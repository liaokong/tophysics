// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
Vue.use(VueResource)
Vue.use(Vuex)
var $ = window.$
Vue.use($)
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.component('my-tops', require('./components/tpls/Tops.vue'))
Vue.component('my-footer', require('./components/tpls/Footer.vue'))
Vue.component('action-middle', require('./components/tpls/Action_middle.vue'))
Vue.component('action-top', require('./components/tpls/Action_top.vue'))
Vue.component('action-bottom', require('./components/tpls/Action_bottom.vue'))
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
