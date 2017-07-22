<template>
<div class="lifelist">
    <h3>生活中的物理知识</h3>
    <div class="disklist">
    <a href="" v-for = "i in 10">
        <div class="block" >
        {{i}}
        <div class="blockdown">
          <p>haifi</p>
          <p>ajifd</p>
          <p>jaifda</p>
        </div>
        </div>
        
    </a>
    </div>
</div>
</template>
<script>
export default {
  name: 'lifelist',
  data () {
    return {
    }
  },
  methods: {
  },
  created: {
  }
}
</script>
<style lang="scss">
.lifelist{
    h3{
        color: green;
        // float: left;
        margin-left: 10px;
    }
    .disklist{
        overflow: hidden;
        .block{
            border-radius: 1vw;
            width: 20vw;
            height: 10vw;
            display: block;
            background-color: rgba(128,128,128,0.5);
            margin-left: 4vw;
            margin-top: 3vw;
            float: left;
            position: relative;
            .blockdown{
              border-radius: 1vw;
              overflow: hidden;
              position: absolute;
              top: 8.5vw;
              left: 0vw;
              width: 100%;
              height: 1.5vw;
              background-color: rgba(0,0,0,0.3);
            }
        }
        :hover .blockdown{
          animation: myfirst 1s forwards;
          -moz-animation: myfirst 1s forwards; /* Firefox */
          -webkit-animation: myfirst 1s forwards;  /* Safari 和 Chrome */
          -o-animation: myfirst 1s forwards; /* Opera */
        }
    }

@keyframes myfirst
{
from {top:8.5vw;height: 1.5vw;}
to {top:0vw;height: 10vw;}
}

@-moz-keyframes myfirst /* Firefox */
{
from {top:8.5vw;height: 1.5vw;}
to {top:0vw;height: 10vw;}
}

@-webkit-keyframes myfirst /* Safari and Chrome */
{
from {top:8.5vw;height: 1.5vw;}
to {top:0vw;height: 10vw;}
}

@-o-keyframes myfirst /* Opera */
{
from {top:8.5vw;height: 1.5vw;}
to {top:0vw;height: 10vw;}
}
}
</style>
