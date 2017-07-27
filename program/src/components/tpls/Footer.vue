<template>
<div class="footer">
  <footer>
    <div class="bottom-nav-bk bottom_nav" style="display:none"></div>
    <div class="bottom-nav bottom_nav" style="display:none">
      <div class="item menu-button"id="menu_buttom"></div>
    </div>
  </footer>
  <!-- <author :auth="auth"></author> -->
</div>
</template>
<script>
import author from './Author.vue'
export default{
  name: 'footer',
  components: { author },
  data () {
    return {
      nowyear: '',
      auth: 'liaojun'
    }
  },
  methods: {
    init () {
      var date = new Date()
      this.nowyear = date.getFullYear()
    }
  },
  created: function () {
    this.init()
  }
}
</script>
<style lang="scss">
.footer{
  position: absolute;
  overflow: hidden;
  height: 4rem;
  bottom: 0;
  background-color: rgba(100,100,100,0.3);
  margin-top: 90px;
  font-size: 11px;
  width: 100%;
  ul{
    li{
      list-style: none;
      display: block;
      float: left;
    }
  }
}
</style>
