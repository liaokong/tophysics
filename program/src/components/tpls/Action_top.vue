<template>
<div class="action-tops" id="nav-top">
<ul>
  <li>A</li>
  <li>B</li>
  <li>L</li>
</ul>
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
    // this.getLinks()
  }
}
</script>
<style lang="scss">
.action-tops{
  position: fixed;
  top: 0;
  height: 5%;
  width: 100%;
  display: none;
  background-color: rgba(100,100,100,0.3);
  ul{
    margin-left: 0;
    margin-top: 1.3%;
    width: 100%;
    font-size: 1.3rem;
    li:first-child{
      border-left: none;
    }
    li{
      width: 33.3%;
      height: 100%;
      list-style: none;
      float: left;
      border-left: solid thin #ffffff;
    }
  }
}
</style>
