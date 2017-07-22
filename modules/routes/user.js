//在这里编写所有关于user的路由
var apibase = require('../tools/apibase');
var seeker = require('../seeker/index');

module.exports = function(app) {
	app.post('/api/user/registe', function(req, res) {
		var obj = req.body;
		if (!apibase.isNotNull(obj.username)) {
			res.json(apibase.error('用户名为空'));
			return;
		}

		if (!apibase.isNotNull(obj.password)) {
			res.json(apibase.error('密码不能为空'));
			return;
		}

		if (!apibase.isNotNull(obj.realname)) {
			res.json(apibase.error('真实名不能为空'));
			return;
		}
		var user_data = {
			username : obj.username,
			password : obj.password,
			realname : obj.realname,
		}
		seeker.registe(user_data, function(err, data) {
			if (err) {
				res.json(apibase.error(data, 801));
				return;
			} else {
				res.json(apibase.success(data));
				return;
			}
		});
	})

	app.post('/user/info', function(req, res) {
		console.log(req.query.book);
	    var conditions = {
	        username : 'liaojuna'
	    }
	    seeker.find(conditions, function(err, data) {
	    	if (err) {
	    		res.json(apibase.error(data, 801));
	    		return;
	    	} else {
	    		res.json(apibase.success(data));
	    		return;
	    	}
	    });    
	})

	app.post('/api/user/login', function(req, res) {
		var obj = req.body;
		console.log(obj.username);
		var username = obj.username;
		var password = obj.password;
		res.json(apibase.success(obj.username+'abc'));
		return;
		var info = {
			username: username,
			password: password
		};
		seeker.login(info, function(err, data){
			if (err) {
				res.json(apibase.error('网络错误'));
				return;
			}
			if (password == data.password) {
				req.session.user = data._id;
				req.session.user_real_name = data.realname;
				res.json(apibase.success('ok'));
				return;
			} else {
				res.json(apibase.error('密码错误'));
				return;
			}
		})
	})
	app.get('/api/user/islogin', function(req, res) {
		var user = req.session.user;
		if (apibase.isNotNull(user)) {
			res.json(apibase.success(req.session.user_real_name));
			return;
		} else {
			res.json(apibase.error('未登录'));
			return;
		}
	})
}