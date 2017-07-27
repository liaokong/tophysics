<template>
<div class="menu">
  <h1>菜单控制页面</h1>
  <ul>
    <li>
      <span class="menu-title">
        主菜单
      </span> 
      <span class="menu-arow">
        ========>
      </span>
      <span class="menu-url">
        ac/cdefa/fasfwefwf
      </span>
      <span class="menu-operation">
      <a href="javascript:void(0)">
        <span class="glyphicon glyphicon-cog"></span>
      </a>
      <a href="javascript:void(0)">
        <span class="glyphicon glyphicon-trash"></span>
      </a> 
      </span>
    </li>
    <li>
      <span class="menu-title">
        ajsfiajfiasfewf
      </span> 
      <span class="menu-arow">
        ========>
      </span>
      <span class="menu-url">
        cd/afawe/ffawef
      </span>
      <span class="menu-operation">
        <a href="javascript:void(0)">
        <span class="glyphicon glyphicon-cog"></span>
      </a>
      <a href="javascript:void(0)">
        <span class="glyphicon glyphicon-trash"></span>
      </a> 
      </span>
    </li>
    <li v-for="menu in menus">
      <span class="menu-title">
        {{menu.title}}
      </span> 
      <span class="menu-arow">
        ========>
      </span>
      <span class="menu-url">
        {{menu.url}}
      </span>
      <span class="menu-operation">
        <a href="javascript:void(0)">
        <span class="glyphicon glyphicon-cog"></span>
      </a>
      <a href="javascript:void(0)" v-on:click="delMenu(menu._id)">
        <span class="glyphicon glyphicon-trash"></span>
      </a> 
      </span>
    </li>
  </ul>
  <div class="menu-right">
  </div>
</div>
</template>
<script>
export default{
  name: 'menu',
  data () {
    return {
      menus: '',
      book: ''
    }
  },
  methods: {
    getAllmenu () {
      var self = this
      window.Physics.send('/api/admin/menu/list', {
        success (result) {
          if (result.errcode === 0) {
            self.menus = result.data
          } else {
            window.Physics.sendMessage(result.message)
          }
        },
        error (err) {
          console.log(err)
          window.Physics.sendMessage(err)
        }
      })
    },
    delMenu (_id) {
      var self = this
      console.log('删除')
      window.Physics.send('/api/admin/menu/del', {
        type: 'post',
        data: {
          id: _id
        },
        success (result) {
          if (result.errcode === 0) {
            window.Physics.sendMessage('ok')
            self.getAllmenu()
          } else {
            window.Physics.sendMessage(result.message)
          }
        },
        error (err) {
          window.Physics.sendMessage(err, true)
        }
      })
    },
    addMenu () {
    }
  },
  created () {
    this.getAllmenu()
  }
}
</script>
<style lang='scss'>
.menu{
  ul{
    margin: 0 auto;
    width: 55%;
    min-width: 906px;
    list-style-type: none;
    font-size: 30px;
    li{
      border-radius: 2px 10px ;
      box-shadow: 1px 1px 2px;
      margin-bottom: 5px;
      height: 40px;
      background-color: rgba(123,123,123,0.5);
      padding-top: 10px;
      padding-left: 6px;
      .menu-title{
        float: left;
        width: 30%;
        min-width: 270px;
        text-align: left;
        display: block;
        text-overflow: hidden;
      }
      .menu-arow{
        float: left;
        height: 100%;
        display: block;
        color: green;
        width: 20%;
        min-width: 180px;
        text-overflow: hidden;
      }
      .menu-url{
        margin-left: 6px;
        height: 100%;
        float: left;
        text-align: left;
        display: block;
        text-overflow: hidden;
        width: 40%;
        min-width: 360px;
        color: blue;
      }
      .menu-operation{
        display: initial;
        margin-top: 0px;
        text-align: left;
        font-size: 23px;
        width: 10%;
        min-width: 90px;
        .glyphicon{
          margin-left: 4px;
        }
      }
    }
  }
  .menu-right{
    position: fixed;
    right: 10px;
    bottom: 50px;
    width: 100px;
    height: 100px;
    background-color: gray;
    border-radius: 5px;
    transition: all 0.3s;
    background-image: url('../../imgs/magic15.svg');
    .input{
      width: 100%;
    }
  }
  .menu-right:hover{
    transition: all 0.6s;
    position: fixed;
    right: 10px;
    border-radius: 10px;
    bottom: 50px;
    width: 300px;
    height: 400px;
    background-color: green;
    background-image: none;

  }
}
  
</style>
