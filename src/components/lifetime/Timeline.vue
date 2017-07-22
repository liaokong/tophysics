<template>
    <div class="time-line">
        <div class="show-area">
            <section class="cd-container" id="cd-timeline">
              <div v-for="item in mytimeline" class="cd-timeline-block">
                <div class="cd-timeline-img cd-picture">
                  <img src="../../imgs/cd-icon-picture.svg" alt="">
                </div>
                <div class="cd-timeline-content">
                  <h2>{{item.title}}</h2>
                  <p>
                    {{item.content}}
                  </p>
                  <a href="http://www.baidu.com" class="cd-read-more" target="_blank">
                    阅读全文
                  </a>
                  <span class="cd-date">{{item.create_at}}</span>
                </div>
              </div>


              <div class="cd-timeline-block">
                <div class="cd-timeline-img cd-picture">
                  <img src="../../imgs/cd-icon-picture.svg" alt="">
                </div>
                <div class="cd-timeline-content">
                  <h2>这里是标题</h2>
                  <p>
                    这里是内容，一般来说，内容大约有100个字左右，但是我们这里是测试，就随便写一点就可以了
                  </p>
                  <a href="http://www.baidu.com" class="cd-read-more" target="_blank">
                    阅读全文
                  </a>
                  <span class="cd-date">2017-05-01</span>
                </div>
              </div>
              
            </section>
            <button class="btn btn-info" v-on:click="getTimeLine">刷新</button>
        </div>
        <div class="add-line">
        <form>
          <div class="form-group">
              <h3>记录生活</h3>
              <input type="text" v-model="title"  class="form-control" placeholder="title">
            </div>
          <div class="form-group">
              <textarea v-model="moument" class="add-area" rows="10"></textarea>
          </div>
          <div class="form-group">
            <button class="btn btn-info" v-on:click="addTimeLine">记录</button>
          </div>
        </form>
            
            
        </div>
    </div>
</template>
<script>
export default{
  name: 'time-line',
  data () {
    return {
      start_time: '',
      age_no: 1,
      mytimeline: [
        {'title': 'abc', 'name': 'book'}
      ]
    }
  },
  methods: {
    addTimeLine () {
      var self = this
      window.Physics.send('/api/lifetime/add', {
        type: 'post',
        data: {
          'moument': self.moument,
          'title': self.title
        },
        success (result) {
          if (result.errcode === 0) {
            self.title = ''
            self.moument = ''
            window.Physics.sendMessage('添加成功')
            self.getTimeLine()
          } else {
            window.Physics.sendMessage(result.message, true)
          }
        },
        error (err) {
          console.log(err)
          window.Physics.sendMessage('内部错误', true)
        }

      })
    },
    getTimeLine () {
      var self = this
      window.Physics.send('/api/lifetime/list', {
        success (result) {
          if (result.errcode === 0) {
            for (var i = result.data.length - 1; i >= 0; i--) {
              result.data[i].create_at = window.Physics.formateTime(result.data[i].create_time)
            }
            self.mytimeline = result.data
          } else {
            window.Physics.sendMessage(result.message)
          }
        },
        error (err) {
          console.log(err)
          window.Physics.sendMessage('内部错误', true)
        }
      })
    }
  },
  created () {
    this.getTimeLine()
  }
}
</script>
<style lang='scss'>
*， *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
img {
  max-width: 100%;
}
    .time-line{
        position: static;
        overflow: hidden;
        display: block;
        float: inherit;
        height: 100%;
        width: 98%;
        padding: 1% 1% 0;
        .show-area{
            background-color: #f3fef2;
            width: 75%;
            height: 100%;
            min-height: 400px;
            float: left;
            .cd-container {
              width: 90%;
              max-width: 1170px;
              margin: 0 auto;
            }
            .cd-container::after {
              content: '';
              display: table;
              clear: both;
            }

            #cd-timeline {
              position: relative;
              padding: 2em 0;
              margin-top: 2em;
              margin-bottom: 2rem;
            }
            #cd-timeline::before {
              content: '';
              position: absolute;
              top: 0;
              left: 18px;
              height: 100%;
              width: 4px;
              background: #d7e4ed;
            }
            @media only screen and (min-width: 800px){
              #cd-timeline {
                margin-top: 3em;
                margin-bottom: 3em;
              }
              #cd-timeline::before{
                left: 50%;
                margin-left: -2px;
              }
            }

            .cd-timeline-block{
              position: relative;
              margin: 2em 0;
            }

            .cd-timeline-block::after {
              content: '';
              display: table;
              clear: both;
            }
            .cd-timeline-block:first-child {
              margin-top: 0;
            }
            .cd-timeline-block:last-child {
              margin-bottom: 0;
            }

            @media only screen and (min-width: 1170px) {
  .cd-timeline-block {
    margin: 4em 0;
  }
  .cd-timeline-block:first-child {
    margin-top: 0;
  }
  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
}

.cd-timeline-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
}
.cd-timeline-img img {
  display: block;
  width: 24px;
  height: 24px;
  position: relative;
  left: 50%;
  top: 50%;
  margin-left: -12px;
  margin-top: -12px;
}
.cd-timeline-img.cd-picture {
  background: #75ce66;
}
.cd-timeline-img.cd-movie {
  background: #c03b44;
}
.cd-timeline-img.cd-location {
  background: #f0ca45;
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-img {
    width: 60px;
    height: 60px;
    left: 50%;
    margin-left: -30px;
    /* Force Hardware Acceleration in WebKit */
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
  .cssanimations .cd-timeline-img.is-hidden {
    visibility: hidden;
  }
  .cssanimations .cd-timeline-img.bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-1 0.6s;
    -moz-animation: cd-bounce-1 0.6s;
    animation: cd-bounce-1 0.6s;
  }
}

.cd-timeline-content {

  position: relative;
  margin-left: 60px;
  background: white;
  border-radius: 0.25em;
  padding: 1em;
  box-shadow: 0 3px 0 #d7e4ed;
}
.cd-timeline-content:after {
  content: "";
  display: table;
  clear: both;
}
.cd-timeline-content h2 {
  color: #303e49;
}
.cd-timeline-content p, .cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {
  font-size: 13px;
  font-size: 0.8125rem;
}
.cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {
  display: inline-block;
}
.cd-timeline-content p {
  margin: 1em 0;
  line-height: 1.6;
}
.cd-timeline-content .cd-read-more {
  float: right;
  padding: .8em 1em;
  background: #acb7c0;
  color: white;
  border-radius: 0.25em;
}
.no-touch .cd-timeline-content .cd-read-more:hover {
  background-color: #bac4cb;  
}
a.cd-read-more:hover{text-decoration:none; background-color: #424242;  }
.cd-timeline-content .cd-date {
  float: left;
  padding: .8em 0;
  opacity: .7;
}
.cd-timeline-content::before {
  content: '';
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid white;
}
@media only screen and (min-width: 768px) {
  .cd-timeline-content h2 {
    font-size: 20px;
    font-size: 1.25rem;
  }
  .cd-timeline-content p {
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {
    font-size: 14px;
    font-size: 0.875rem;
  }
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-content {
    margin-left: 0em;
    padding: 1.6em;
    width: 42%;
  }
  .cd-timeline-content::before {
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: white;
  }
  .cd-timeline-content .cd-read-more {
    float: left;
  }
  .cd-timeline-content .cd-date {
    position: absolute;
    width: 100%;
    left: 80%;
    top: 6px;
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
    top: 24px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: white;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
    left: auto;
    right: 122%;
    text-align: right;
  }
  .cssanimations .cd-timeline-content.is-hidden {
    visibility: hidden;
  }
  .cssanimations .cd-timeline-content.bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-2 0.6s;
    -moz-animation: cd-bounce-2 0.6s;
    animation: cd-bounce-2 0.6s;
  }
}

@media only screen and (min-width: 1170px) {
  /* inverse bounce effect on even content blocks */
  .cssanimations .cd-timeline-block:nth-child(even) .cd-timeline-content.bounce-in {
    -webkit-animation: cd-bounce-2-inverse 0.6s;
    -moz-animation: cd-bounce-2-inverse 0.6s;
    animation: cd-bounce-2-inverse 0.6s;
  }
}
            ul{
              list-style-type: none;
              li{

              }
            }
        }
        .add-line{
            position: relative;
            display: block;
            background-color: #989082;
            width: 25%;
            height: 100%;
            float: left;
            min-height: 400px;
            overflow: hidden;
            form{
              border: none;
              width: 100%;
              padding: 0 auto;
              text-align: center;
              .form-group{
                margin: 0 auto;
                border: none;
                h3{
                  color: green;
                }
                input{
                  width: 100%;
                  border: 0;
                  font-size: 20px;
                  background-color: rgba(0,0,0,0);
                  border-bottom: 1px solid #b1b1b1;
                  text-align: center;
                  -webkit-box-shadow: rgba(0,0,0,0) 0px 0px 0px;
                  -moz-box-shadow: rgba(0,0,0,0) 0px 0px 0px;
                  box-shadow: rgba(0,0,0,0) 0px 0px 0px;
                  border-radius: 0px;
                }
                .add-area{
                  border: 0;
                  width: 97%;
                  font-size: 20px;
                }
                button{
                  width: 100px;
                  height: 50px;
                  font-size: 22px;
                  border-radius: 30px;
                  border: 0;
                }
              }
            }
            
        }
    }
</style>
