import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/login',
      component: require('../components/user/Login.vue')
    },
    {
      path: '/home/myform',
      component: require('../components/tpls/Form.vue')
    },
    {
      path: '/setting',
      component: require('../components/Setting.vue')
    },
    {
      path: '/citizen/user',
      component: require('../components/citizen/User.vue')
    },
    {
      path: '/life/list',
      component: require('../components/lifetime/Lifelist.vue')
    },
    {
      path: '/life/detail',
      component: require('../components/lifetime/Detail.vue')
    },
    {
      path: '/life/test',
      component: require('../components/lifetime/Test.vue')
    },
    {
      path: '/timeline/show',
      component: require('../components/lifetime/Timeline.vue')
    },
    {
      path: '/admin/menu/list',
      component: require('../components/admin/Menu.vue')
    },
    {
      path: '/liaojun/css/t1',
      component: require('../components/test/T1.vue')
    }
  ]
})
