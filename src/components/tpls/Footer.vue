<template>
<div class="footer">
  <footer>&copy; 2017 -- {{nowyear}} tophysics.com&tophysics.xyz
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
  margin-top: 90px;
  font-size: 11px;
  width: 100%;
  display: block;
  position: absolute;
}
</style>
