<template>
<div class="test">
    <h2>测试页面</h2>
    <input type="checkbox" value="jack" v-model="mylist" id="jack"><label for="jack">jack</label></input>
    <input type="checkbox" value="Tom" v-model="mylist" id="Tom"><label for="Tom">Tom</label></input>
    <input type="checkbox" value="Mike" v-model="mylist" id="Mike"><label for="Mike">mike</label></input>
    <label>{{mylist}}</label>

    <select v-model="selected">
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
    </select>
    <label>selected {{selected}}</label>

    <select v-model="selected2" multiple style="width:50px">
        <option value="jia">甲</option>
        <option>乙</option>
        <option>丙</option>
        <option>丁</option>
    </select>
    <label>多选 {{selected2}}</label>

    <input type="checkbox" v-model="toggle" v-bind:true-value="a" v-bind:false-valeu="b">
    <label>{{toggle}}</label>
    <input type="text" v-model.lazy="hello1">
    <label>{{hello1}}</label>

    <input type="text" v-model.trim="hello2">
    <label>{{hello2}}</label>
</div>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {
      mylist: [],
      selected: null,
      selected2: [],
      toggle: 'b',
      hello1: '',
      hello2: ''
    }
  },
  methods: {
  },
  created: {
  }
}
</script>
<style lang="scss">
    .test{
        h2{
            color: red;
        }
    }
</style>
