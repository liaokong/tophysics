<template>
<div class="action-middle" v-on:click="clickHandle">
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
    clickHandle () {
      var top = window.$('#nav-top')
      var bottom = window.$('#nav-bottom')
      if (top.css('display') === 'none') {
        top.slideDown(200)
        bottom.slideDown(200)
      } else {
        top.slideUp(200)
        bottom.slideUp(200)
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
