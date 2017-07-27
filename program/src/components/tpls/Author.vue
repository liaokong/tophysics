<template>
<div class="author">
<span>powered by {{ auth }} </span>
</div>
</template>
<script>
export default{
  name: 'author',
  props: [ 'auth' ]
}
</script>
<style lang="scss">
.footer{
  margin-top: 90px;
}
</style>
