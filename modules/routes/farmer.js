var apibase = require('../tools/apibase');
var farmer  = require('../farmer/index');
module.exports = function(app) {

	app.get('/farm/list', function(req, res) {
		res.json(apibase.success('ok'));
		return;
	})
	app.get('/farm/registe', function(req, res) {
		var date = new Date().getDate();
		farmer.registe('name', 'password', 'phone', '男', date, '287612121@qq.com',function(err, result) {
			if (err) {
				res.json(apibase.error(801, '注册失败'));
				return;
			} else {
				res.json(apibase.success(result));
				return;
			}
		})
	})
}