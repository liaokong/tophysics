<template>
<div class="action-bottom" id="nav-bottom">
  <div class="bottom-1"></div>
  <div class="bottom-2">
    <ul>
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
  </div>
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
.action-bottom{
  position: fixed;
  bottom: 0;
  height: 10%;
  width: 100%;
  display: none;
  background-color: rgba(100,200,200,0.3);
  .bottom-1{
    bottom: 0;
    height: 30%;
    width: 100%;
    background-color: rgba(130,100,20,0.4);
  }
  .bottom-2{
    top: 0;
    width: 100%;
    height: 70%;
    text-align: center;
    padding-left: 0;
    // background-color: rgba(20,30,40,0.3);
    ul{
      margin-left: 0;
      width: 100%;
      height: 100%;
      padding-top: 2.7%;
      li:first-child{
        border-left: none;
      }
      li{
        width: 33.3%;
        // margin: 0 auto;
        list-style: none;
        display: block;
        float: left;
        border-left: solid thin #ffffff;
        font-size: 1.6rem;
      }
    }
  }
}
</style>
