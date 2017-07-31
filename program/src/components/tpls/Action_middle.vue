<template>
<div class="action-mask">
<div class="action-tops" id="nav-top">
<ul>
  <li>A</li>
  <li>B</li>
  <li>L</li>
</ul>
</div>



<div class="action-middle" v-on:click="clickBottom">
</div>


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
      <router-link to="/">
        <li v-bind:class="{tag_active:show_tps == 1}" @click="change_tag(1)">
          A
        </li>
      </router-link>
      <router-link to="/setting">
        <li v-bind:class="{tag_active:show_tps == 2}" @click="change_tag(2)">
          B
        </li>
      </router-link>
      <router-link to="/home/myfrom">
        <li v-bind:class="{tag_active:show_tps == 3}" @click="change_tag(3)">
          C
        </li>
      </router-link>
    </ul>
  </div>
</div>

</div>
</template>

<script>
export default {
  name: 'action-mask',
  data () {
    return {
      show_tps: 1,
      menus: '',
      show_mask: 1,
      dom1: {
        nav_top: window.$('#nav-top'),
        nav_bottom: window.$('#nav-bottom')
      }
    }
  },
  methods: {
    clickHandle () {
      // var top = window.$('#nav-top')
      // var bottom = window.$('#nav-bottom')
      // if (top.css('display') === 'none') {
      //   top.slideDown(200)
      //   bottom.slideDown(200)
      // } else {
      //   top.slideUp(200)
      //   bottom.slideUp(200)
      // }
    },
    clickBottom () {
      // var bottom = window.$('#nav-bottom')
      // console.log(bottom.css('z-index'))
      // if (bottom.css('z-index') === 0) {
      //   bottom.css('z-index', 10001)
      // } else {
      //   bottom.css('z-index', 0)
      // }
    },
    change_tag (step) {
      this.show_tps = step
    }
  },
  created () {
    this.show_tps = 1
    this.show_mask = 1
  }
}
</script>
<style>
.action-tops{
  z-index: 10001;
  position: fixed;
  top: 0;
  height: 5%;
  width: 100%;
  display: none;
  background-color: rgba(100,100,100,0.3);
  .show_nav{
    display: block;
  }
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
.action-middle{
  position: fixed;
  width: 100%;
  height: 30%;
  top: 60%;
  bottom: 0;
  z-index: -1;
}


.action-bottom{
  z-index: 10001;
  display: block;
  position: fixed;
  bottom: 0;
  height: 20%;
  width: 100%;
  background-color: rgba(100,200,200,1);
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
    .tag_active{
      color: yellow;
    }
    ul{
      margin-left: 0;
      width: 100%;
      height: 100%;
      background-color: red;
      padding-top: 2.7%;
      li:first-child{
        border-left: none;
      }
      li{
        width: 33.3%;
        background-color: green;
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
