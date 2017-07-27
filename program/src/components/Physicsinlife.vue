<template>
  <div class="physicsinlife">
    <h1>生活中的物理</h1>
    <ul>
      <li v-for="list in lists">
        {{list.title}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'physicsinlife'
  data () {
    return {
      list: {},
    }
  }
}
</script>