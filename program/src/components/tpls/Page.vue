<template>
  <div class="page-bar">
    <div class="page-size">
      <div>
        <select v-on:change="menuChange()",v-model="limit">
          <option v-for="item in menu" v-bind:value="item">{{item}}</option>
        </select>
        记录/页，显示第{{start}}至{{end}}项纪录，共{{totalSize}}项
      </div>
    </div>
    <div class="page-con">
      <ul>
        <li><a v-on:click="firstClick()" v-bind:class="{'disabled': cur == 1}">首页</a></li>
        <li><a v-on:click="preClick()" v-bind:class="{'disabled':cur ==1}"></a></li>
        <li v-for="per in pages" v-bind:class="{'active': cur == per}">
          <a v-on:click="pageClick(per)">{{per}}</a>
        </li>
        <li><a v-on:click="nextClick()" v-bind:class="{'disabled': cur == totalPage}">下一页</a></li>
        <li><a v-on:click="lastClick()" v-bind:class="{'disabled': cur == totalPage}">尾页</a></li>
        <li><a>共<i>{{totalPage}}</i>页</a></li>
      </ul>
    </div>
      <div class="clear-both"></div>
  </div>
</template>

<script>
  export default {
    props:['page-model'],
    data () {
      return {
        //初始页
        cur : 1,
        //请求地址
        url : this.pageModel.url ? this.pageModel.url : "",
        //请求参数
        param: this.pageModel.param ? this.pageModel.param : {},
        //请求方法,默认GET
        method: this.pageModel.method ? this.pageModel.method : 'GET',
        //每页显示数量,默认每页显示10条
        limit: this.pageModel.menu ? this.pageMode.menu[0] : 10,
        //底部分页基数，默认5
        perSize: this.pageModel.perSize ? this.pageModel.perSize : 5,
        //每页显示数量，下拉选项
        menu: this.pageModel.menu ? this.pageModel.menu : [5, 10, 50],
        //分页参数，自定义名称
        pageParamName : this.pageModel.pageParamName ? this.pageModel.pageParamName : ['page', 'limit'],
        //当前列表显示纪录开始数
        start : 0,
        //当前显示纪录结束数
        end: 0,
        //总页数
        totalPage : 0,
        totalSize: 0,
        //分页请求返回的数据
        dataList: []
      }
    },
    ready () {
      this.getData() 
    },
    methods: {
      //首页
      firstClick () {
        if (this.cur > 1) {
          this.cur = 1
          this.getData()
        }
      },
      //尾页
      lastClick () {
        if (this.cur < this.totalPage) {
          this.cur = this.totalPage
          this.getData()
        }
      },
      //上一页
      preClick () {
        if (this.cur > 1) {
          this.cur--
          this.getData()
        }
      },
      //页码
      pageClick (data) {
        if (data != this.cur) {
          this.cur = data
          this.getData()
        }
      },
      refreshPageCon () {
        this.start = (this.cur - 1) * this.limit + 1
        if (this.totalSize >= this.limit * this.cur) {
          this.end = this.limit * this.curl
        } else {
          this.end = this.totalSize
        }
      },
      //分页请求
      getData () {
        let _this = this
        this.param[this.pageParamName[0]] = this.cur
        this.param[this.pageParamName[1]] = this.limit
        window.physics.send(_this.url,{
          type: _this.method,
          data: _this.param,
           
        })
      }
    }
  }
</script>


