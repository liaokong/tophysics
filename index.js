//引入系统自带模块
var express = require('express');
var path    = require('path');//path是拼接路径的
var session = require('express-session');
var cookie  = require('cookie-parser');
var apibase = require('./modules/tools/apibase');
var cors = require('cors');


//引入自定义模块
var bodyParser = require('body-parser');
var apibase    = require('./modules/tools/apibase');
var mongoDb    = require('./db/mongo');
// var redisDb    = require('./db/redis');
var mysqlDb    = require('./db/mysqldb');

var port = process.env.PORT || 4000;
var app = express();
app.use(express.static(path.join(__dirname, 'dist')));
// app.use(express.static(path.join(__dirname, 'static')));
app.use('/plugs', express.static(path.join(__dirname, 'plugs')));
app.set('view engine', 'html');
app.use(cors());
//解析post方法传递的值，req.body.username
app.use(bodyParser.urlencoded({extended : false}));
//开启session功能
app.use(session({
resave: false,
saveUninitialized:false,
cookie:{maxAge: 8000000},
secret:'jikegz'
}));

app.use(function(req, res ,next) {
    //这里可以做登录等验证操作
    var ind = req.url.indexOf("/login");
    var reg = req.url.indexOf("/registe");
    if (ind == 9) {
      next();
    } else if (reg ==9) {
      next();
    } else {
      if (req.session.user != '') {
        // console.log('已经登录');
        next();
      } else {
        res.json(apibase.error('未登录', 110));
        // res.redirect('/#/login');
        console.log('未登录');
        return;
      }
    }
})

app.get('/', function(req, res) {
    res.render('./dist/index.html');
});
//引入路由文件
require('./modules/routes/farmer')(app);
require('./modules/routes/citizen')(app);
require('./modules/routes/news')(app);
require('./modules/routes/home')(app);
require('./modules/routes/content')(app);
require('./modules/routes/user')(app);
require('./modules/routes/admin')(app);

//把服务封装到一个方法里面
function startServer() {
    var server = app.listen(port);
}

//判断项目是如何被使用的，如果是被引入，就导出启动方法
if (require.main === module) {
    startServer();
} else {
    module.exports = startServer;
}