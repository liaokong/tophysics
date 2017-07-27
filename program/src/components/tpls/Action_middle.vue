<template>
<div class="action-middle" v-on:click="click">
</div>
</template>

<script>
export default {
  name: 'action-middle',
  data () {
    return {
      tpls: '头部信息',
      menus: '',
      dom1: {
        nav_top: window.$('#nav-top'),
        nav_bottom: window.$('#nav-bottom')
      }
    }
  },
  methods: {
    click () {
      var self = this
      if (self.dom1.nav_top.css('display') === 'none') {
        self.dom1.nav_top.slideDown(200)
        self.dom1.nav_bottom.slideDown(200)
      } else {
        self.dom1.nav_top.slideUp(100)
        self.dom1.nav_bottom.slideUp(100)
      }
    }
  },
  created () {

  }
}
</script>
<style>
.action-middle{
  position: fixed;
  width: 100%;
  height: 40%;
  top: 30%;
  z-index: 10001;
}
</style>
