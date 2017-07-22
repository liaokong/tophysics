var apibase = require('../apibase');
module.exports = function(app) {
	app.get('/index', function(req, res) {
		res.sender('main');
	})
}