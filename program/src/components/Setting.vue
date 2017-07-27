<template>
  <div class="setting">
  <h1>{{ss}}</h1>
  <button class="btn" @click="tt">测试</button>
  </div>
</template>
<script>
export default{
  name: 'setting',
  data () {
    return {
      ss: '设置'
    }
  },
  methods: {
    open () {
      console.log('hellowrd')
    },
    close () {
      console.log('abc')
    },
    tt () {
      // console.log('tt function')
      window.Physics.sendMessage('错误')
    }
  },
  computed: {
    upper () {
      console.log('computed method')
    }
  }
}
</script>
