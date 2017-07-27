<template>
<div class="action-bottom" id="nav-bottom">
</div>
</template>

<script>
export default {
  name: 'action-tops',
  data () {
    return {
      tpls: '头部信息',
      menus: ''
    }
  },
  methods: {
  },
  created () {
    this.getLinks()
  }
}
</script>
<style>
.action-bottom{
  position: fixed;
  bottom: 0;
  height: 10%;
  width: 100%;
  display: none;
  background-color: green;
}
</style>
