<template>
<div class="action-bottom" id="nav-bottom">
  <div class="bottom-1">
    <div class="show-a" v-show="show_tps == 1" >
      <span>this is show a</span>
    </div>
    <div class="show-b" v-show="show_tps == 2">
      <span>this is show b</span>
    </div>
    <div class="show-c" v-show="show_tps == 3">
      <span>this is show c</span>
    </div>
  </div>
  <div class="bottom-2">
    <ul>
      <li v-bind:class="{tag_active:show_tps == 1}" @click="change_tag(1)">A</li>
      <li v-bind:class="{tag_active:show_tps == 2}" @click="change_tag(2)">B</li>
      <li v-bind:class="{tag_active:show_tps == 3}" @click="change_tag(3)">C</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'action-tops',
  data () {
    return {
      show_tps: 1,
      tpls: '头部信息',
      menus: ''
    }
  },
  methods: {
    change_tag (step) {
      this.show_tps = step
    }
  },
  created () {
    // this.getLinks()
    this.show_tps = 1
  }
}
</script>
<style lang="scss">
.action-bottom{
  position: fixed;
  bottom: 0;
  height: 20%;
  width: 100%;
  display: none;
  background-color: rgba(100,200,200,0.2);
  .show_nav{
    display: block;
  }
  .bottom-1{
    bottom: 0;
    height: 30%;
    width: 100%;
  }
  .bottom-2{
    margin-top: 15%;
    width: 100%;
    height: 30%;
    text-align: center;
    padding-left: 0;
    // background-color: rgba(20,30,40,0.3);
    .tag_active{
      color: yellow;
    }
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
