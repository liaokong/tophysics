<template>
  <div id="app">
    <!-- <action-top></action-top> -->
    <action-middle></action-middle>
    <router-view></router-view>
    <!-- <div class="bottom-nav"> -->
    <!-- <action-bottom></action-bottom> -->
    <my-footer></my-footer>
  <!-- </div> -->
    
  </div>

</template>

<script>
export default {
  name: 'app',
  components: {
    // Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background-color: #f8f8ff;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.main{
    height: 400px;
    margin-left: 180px;
    margin-right: 25px;
}
</style>
