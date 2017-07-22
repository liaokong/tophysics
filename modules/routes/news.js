var apibase = require('../apibase');
var content = require('../content/index');
module.exports = function(app) {
	app.post('/api/news/add', function(req, res){
		var self = this;
		var obj = req.body;
		if (!apibase.isNotNull(obj.title)) {
			res.json(apibase.error('title is empty', 801));
			return;
		}

		if (!apibase.isNotNull(obj.smalltitle)) {
			res.json(apibase.error('small title is empty', 801));
			return;
		}

		if (!apibase.isNotNull(obj.content)) {
			res.json(apibase.error('content is empyt', 801));
			return;
		}

		content.addnews(obj.title, obj.smalltitle, obj.content, function(err, data){
			if (err) {
				res.json(apibase.error('add news error', 801));
				return;
			} else {
				res.json(apibase.success('add news ok'));
				return;
			}
		})
		setTimeout(function(){
			res.json(apibase.success('ok'));
			return;
		}, 3000);
	});
	app.get('/api/news/list', function(req, res) {
		content.newslist(1, 10, function(err, data) {
			if (err) {
				res.json(apibase.error('inner error', 801));
				return;
			} else {
				res.json(apibase.success(data));
				return;
			}
		})
	});
	app.post('/api/news/delete', function(req, res) {
		obj = req.body;
		if (!apibase.isNotNull(obj.news_id)) {
			res.json(apibase.error('news_id is empty', 801));
			return;
		}
		content.newsdelete(obj.news_id, function(err, data) {
			if (err) {
				res.json(apibase.error('delete error', 801));
				return;
			} else {
				res.json(apibase.success('ok'));
				return;
			}
		})
	})

}