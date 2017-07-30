<template>
<div class="footer">
  <footer>
  copyright from 2016 - {{nowyear}}
  </footer>
  <author :auth="auth"></author>
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
  position: fixed;
  z-index: 900;
  overflow: hidden;
  height: 2rem;
  bottom: 0;
  background-color: rgba(100,100,100,0.3);
  margin-top: 100px;
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
