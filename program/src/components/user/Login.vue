<template>
    <div class="login">
    <div class="login-page" v-if="show_login == 0">
        <h3>LoginPage</h3>
        <div class="form-group">
            <input type="text" v-model="username" class="username" placeholder="Input UserName">
        </div>
        <div class="form-group">
            <input type="password" v-model="password" class="password" placeholder="Input Password">
        </div>
        <div class="form-group">
            <button class="btn btn-warning btn-cancel" >Cancel</button>
            <button v-if = "username != '' && password != '' " class="btn btn-info btn-login" v-on:click="login" >Login</button>
            <button v-else disabled class="btn btn-default btn-login-disable" v-on:click="login" >Login</button>
        </div>
        <a class="a_registe" href="javascript:void(0)" v-on:click="showRegiste(1)">注册</a>
    </div>
    <div class="registe-page" v-if="show_login == 1">
        <h3>RgeistePage</h3>
        <div class="form-group">
            <input type="text" v-model="registe_username" class="username" placeholder="Input Rgeiste UserName">
        </div>
        <div class="form-group">
            <input type="password" v-model="registe_password" class="password" placeholder="Input Registe Password">
        </div>
        <div class="form-group">
            <input v-if="registe_password == registe_repassword" type="password" v-model="registe_repassword" class="re_password" placeholder="Re Input Password">
            <input v-else type="password" v-model="registe_repassword" class="re_password_disable" placeholder="Re Input Password">
        </div>
        <div class="form-group">
            <input type="text" v-model="registe_realname" class="real_name" placeholder="Input Real Name">
        </div>
        <div class="form-group">
            <button v-if="registe_realname != '' && registe_repassword != '' && (registe_repassword == registe_password) && registe_username !=''" class="btn btn-info btn-registe" v-on:click="doRgiste">Registe</button>
            <button v-else disabled class="btn btn-registe-disable">Registe</button>
        </div>
        <a class="a_login" href="javascript:void(0)" v-on:click="showRegiste(0)">登陆</a>
    </div>
    <div class="haslogin" v-if= "show_login == 2">
        <h2>您已登陆帐号{{user_real_name}}</h2>
        <img src="../../imgs/earth.svg" alt="点击切换帐号">
        <br>
        <a href="javascript:void(0)" v-on:click="showRegiste(0)">切换帐号</a>
    </div>
    </div>
</template>
<script>
export default{
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      rember: 0,
      show_login: 0,
      registe_realname: '',
      registe_username: '',
      registe_repassword: '',
      registe_password: '',
      user_real_name: 'liaojun',
      login_flag: 2
    }
  },
  methods: {
    islogin () {
      var self = this
      window.Physics.send('/api/user/islogin', {
        success (result) {
          if (result.errcode === 0) {
            self.show_login = 2
            self.user_real_name = result.data
          } else {
            self.login_flag = 0
          }
        },
        error (error) {
          console.log(error)
          self.login_flag = 0
        }
      })
    },
    showRegiste (code) {
      this.show_login = code
    },
    doRgiste () {
      var self = this
      window.Physics.send('/api/user/registe', {
        type: 'post',
        data: {
          'username': self.registe_username,
          'password': self.registe_password,
          'realname': self.registe_realname
        },
        success (result) {
          if (result.errcode !== 0) {
            window.Physics.sendMessage(result.message, true)
          } else {
            window.Physics.sendMessage('注册成功')
            self.show_login = 0
          }
        }
      })
    },
    login () {
      var self = this
      window.Physics.send('/api/user/login', {
        type: 'post',
        data: {
          'username': self.username,
          'password': self.password
        },
        success (resu) {
          if (resu.errcode !== 0) {
            window.Physics.sendMessage(resu.message, true)
          } else {
            // 登录成功，跳转,刷新菜单，刷新本页面
            location.reload()
            self.$router.push('/timeline/show')
            window.Physics.sendMessage('登录成功')
          }
        },
        error (errcode) {
          // 跳转
          // self.$router.push('/life/test')
          window.Physics.sendMessage(self.password, true)
        }
      })
    }
  },
  created () {
    this.islogin()
  }
}
</script>

<style lang="scss">
.login{
    .login-page{
    margin: 0 auto;
    width: 370px;
    height: 230px;
    border-radius: 4px;
    border: 1px solid green;
    -webkit-box-shadow: #666 0px 0px 20px;  
    -moz-box-shadow: #666 0px 0px 20px; 
    box-shadow: #666 0px 0px 20px;  
    // background-color: rgba(123,123,100,0.7);
    box-shadow: 2px,2px;
    .a_registe{
        font-size: 12px;
        margin-left: 80%;
    }
    .form-group{
        padding-top: 7px;
        // .password-label{
        //     float: left;
        //     margin-top: 3px;
        //     margin-left: 15px;
        // }
        .username, .password{
            margin: 7 auto;
            width: 90%;
            border: 0;
            background-color: rgba(0,0,0,0);
            border-bottom: 1px solid #b1b1b1;
            text-align: left;
            -webkit-box-shadow: rgba(0,0,0,0) 0px 0px 0px;
            -moz-box-shadow: rgba(0,0,0,0) 0px 0px 0px;
            box-shadow: rgba(0,0,0,0) 0px 0px 0px;
            border-radius: 0px;
        }
        .username:focus{
            border-bottom: 1px solid green;
        }
        .password:focus{
            border-bottom: 1px solid green;
        }
       
        text-align: center;
        button{
            width: 70px;
        }
        .btn-cancel{
            float: left;
            margin-top: 10px;
            margin-left: 100px;
            -webkit-box-shadow: orange 0px 0px 7px;
            -moz-box-shadow: orange 0px 0px 7px;
            box-shadow: orange 0px 0px 7px;

        }
        .btn-login{
            float: right;
            margin-top: 10px;
            margin-right: 100px;
            box-shadow: #49afcd 0px 0px 7px;
        }
        .btn-login-disable{
            float: right;
            margin-top: 10px;
            margin-right: 100px;
            box-shadow: gray 0px 0px 7px;
        }


    }
}

.registe-page{
    margin: 0 auto;
    width: 370px;
    height: auto;
    border-radius: 4px;
    border: 1px solid green;
    -webkit-box-shadow: #666 0px 0px 20px;  
    -moz-box-shadow: #666 0px 0px 20px; 
    box-shadow: #666 0px 0px 20px;
    padding-bottom: 10px;
    // background-color: rgba(123,123,100,0.7);
    box-shadow: 2px,2px;
    .a_login{
        margin-left: 80%;
        font-size: 12px;
        margin-bottom: 30px;
    }
        .form-group{
        padding-top: 7px;
        .username, .password, .re_password, .real_name, .re_password_disable{
            margin: 7 auto;
            width: 90%;
            border: 0;
            background-color: rgba(0,0,0,0);
            border-bottom: 1px solid #b1b1b1;
            text-align: left;
            -webkit-box-shadow: rgba(0,0,0,0) 0px 0px 0px;
            -moz-box-shadow: rgba(0,0,0,0) 0px 0px 0px;
            box-shadow: rgba(0,0,0,0) 0px 0px 0px;
            border-radius: 0px;
        }
        .username:focus{
            border-bottom: 1px solid green;
        }
        .password:focus{
            border-bottom: 1px solid green;
        }
        .re_password:focus{
            border-bottom: 1px solid green;
        }
        .real_name:focus{
            border-bottom: 1px solid green;
        }
       .re_password_disable{
            border-bottom:  1px solid red;
       }
        text-align: center;
        button{
            width: 70px;
        }
        .btn-cancel{
            float: left;
            margin-top: 10px;
            margin-left: 100px;
            -webkit-box-shadow: orange 0px 0px 7px;
            -moz-box-shadow: orange 0px 0px 7px;
            box-shadow: orange 0px 0px 7px;

        }
        .btn-registe{
            margin-top: 10px;
            box-shadow: #49afcd 0px 0px 7px;
        }
        .btn-registe-disable{
            margin-top: 10px;
            box-shadow: gray 0px 0px 7px;
        }


    }
}

.haslogin{
    padding-top: 30px;
    h2{
        font-size: 22px;
    }

    img{
        width: 170px;
    }
    a{
        font-size: 12px;
        display: block;
        margin-top: 20px;
    }

}
}
</style>
