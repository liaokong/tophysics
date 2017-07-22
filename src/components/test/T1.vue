<template>
<div class="t1">
  <!-- <div class="jianbian"></div>
  <div class="liner"></div>
  <div class="bottom-left"></div>
  <div class="therty-deg"></div>
  <div class="rain-bow"></div>
  <div class="rgba"></div>
  <div class="tuoyuan"></div> -->
 <!--  <div class="wenben">
    hello word
  </div> -->
  <div class="keyfram">
  <div class="myborder-test"></div>
    
  </div>
  <lable>{{test | toUpchar}}</lable>
  <input type="text" v-model="test">
  <input type="text" v-model="message">
  <lable>{{reversedMessage}}</lable>
  
  <p>问你一个问题可以吗 <input type="text" v-model="question"></p>
  <p>{{ answer }}</p>
  
  <input type="text" v-model="d1" v-on:keyup.enter="f1">

  <button v-on:click="show = !show">toggle</button>
  <transition name="myfade">
    <div v-if="show" class="home">
      <h1>hello girl</h1>
    </div>

  </transition>
</div>
</template>
<script>
export default{
  name: 't1',
  data () {
    return {
      menus: '',
      book: '',
      test: '',
      message: '',
      question: '',
      answer: '你没有问问题的时候，我怎么回答你呢',
      d1: '',
      show: true
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  },
  filters: {
    toUpchar: function (value) {
      return value + '过滤器'
    }
  },
  watch: {
    question: function (newQuestion) {
      this.answer = '等你停止输入了再回答~'
      // this.getAnswer()
    }
  },
  methods: {
    f1 () {
      console.log(this.d1)
    }
  }
}
</script>
<style lang='scss'>
  .t1{
    min-height: 900px;
    height: 100%;
    width: 100%;
    /*background: url('../../imgs/wugui.png') right bottom no-repeat,url(../../imgs/center.jpeg) repeat;*/
    .keyfram{
      width: 100px;
      height: 100px;
      background: gray;
      border-radius: 10px 20px;
      -webkit-animation: myframe 5s;
    }
    .myborder-test{
      height: 200px;
      width: 400px;
      background: linear-gradient(bottom right, green,  yellow, blue);
      border-left: solid;
      border-left-width: 20px;
      border-left-color: rgba(100, 100, 100, 0.4);
      outline-style: dotted;
    }
    .myfade-enter-active, .myfade-leave-active{
      transition: opacity 1s;
    }
    .myfade-enter, .myfade-leave-active{
      opacity: 0;
    }

  }
</style>
