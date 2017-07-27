<template>
<div class="tops indexheader">
  <ul class="nav nav-tabs">
    <li role="presentation">
      <router-link to="/life/list" class = "active">Index</router-link>
    </li>
    <li role="persentation">
      <router-link to="/admin/menu/list">菜单控制</router-link>
    </li>
    <li role="persentation">
      <router-link to="/login">登陆</router-link>
    </li>
    <li role="persentation">
      <router-link to="/timeline/show">日记</router-link>
    </li>
    <li role="presentation" v-for = "menu in menus">
      <router-link :to="menu.url">{{menu.name}}</router-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'tops',
  data () {
    return {
      tpls: '头部信息',
      menus: ''
    }
  },
  methods: {
    getLinks () {
      var self = this
      window.Physics.send('/api/admin/menu/list', {
        success (resu) {
          if (resu.errcode !== 0) {
            window.Physics.sendMessage('网络错误', true)
          } else {
            self.menus = resu.data
          }
        },
        error (errcode) {
          window.Physics.sendMessage('网络错误', true)
        }
      })
    }
  },
  created () {
    this.getLinks()
  }
}
</script>
<style>
  .nav li a{
    font-size: 23px;
  }
</style>
