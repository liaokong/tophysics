var apibase = require('../tools/apibase');
module.exports = function(app) {
	app.get('/citizen/index', function(req, res) {
		res.json(apibase.success('ok'));
		return;
	})
}