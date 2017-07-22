var redis = require('../../db/redis');
module.exports = function(app) {

app.get('/admin/getuser', function(req, res){
    res.json(apibase.success('admin_path'));
    return;
})


app.get('/', function(req, res){
    res.render('home');
})

app.get('/about', function(req, res){
    cookies = tools.getFortune();
    ipaddr  = req.ip;
    //指定布局模板，
    res.render('about',{layout:'admin',fortune:cookies,ipaddr:ipaddr});
})

app.get('/jquerytest',function(req, res){
    res.render('jquerytest');
})
//服务端接口

app.get('/hello', function(req, res) {
    var ab = ['a','b','c','d','f'];
    // res.json(ab);
    if (app.get('debug')) {
        res.json(apibase.success('debug is yes'));
        return;
    } else {
        res.json(apibase.success('debug is no'));
        return;
    }
    if (ab.length > 9) {
        res.json(apibase.success(ab));
        return;
    } else {
        res.json(apibase.error('a'));
        return;
    }
    var cd = apibase.success(ab);
    res.json(cd);
});



app.get('/ab*cd', function(req, res){
    if (apibase.isNotNull(req.session.user)) {
        res.send(req.session.user);
        return;
    } else {
        res.send('正则匹配');
        return;
    }
});

app.post('/ab/cd', function(req, res){
    res.send(req.session.user);
    console.log(req.path+'post请求');
});

app.get('/user/login', function (req, res){
    var info = req.query;
    var username = info.username;
    var password = info.password;
    if (info.username == 'love' && info.password == 'love') {
        var user = {'username':'love'};
        req.session.user = user;
    }
    if (!apibase.isNotNull(username)) {
        res.json(apibase.error('用户名或密码未空'));
        return;
    }
    if (username == password) {
        res.json(apibase.success('登陆成功'));
        return;
    } else {
        res.json(apibase.error('登陆错误'));
        return;
    }
});

app.post('/user/login', function(req, res){
    var info = req.query;
    var username = info.username;
    var password = info.password;
    if (username == password) {
        res.json(apibase.success('登陆成功'));
        return;
    } else {
        res.json(apibase.error('登陆错误'));
        return;
    }
});


app.get('/hmset', function(req, res){
    var info = new Array();
    info['name'] = 'abc';
    info['sex'] = 'boy';
    info['password'] = '123123';

    redis.hmset('liaojun',info, function(err, result){
        if(err) {
            console.log('错误');
            res.send('错误');
            return;
        }
        console.log('ok');
        res.send('正确');
        return;
    })
})

}