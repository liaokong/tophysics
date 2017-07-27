<template>
<div class="action-tops" id="nav-top">
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
.action-tops{
  position: fixed;
  top: 0;
  height: 5%;
  width: 100%;
  display: none;
  background-color: yellow;
}
</style>
