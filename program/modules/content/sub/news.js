var mongoDb = require('../../../db/mongo');
var news = {};
news.add = function(title_info, smalltitle_info, content_info, callback){
	now = Date.now();
	var news_info = {
		title : title_info,
		smalltitle : smalltitle_info,
		content : content_info,
		create_time : now,
		update_time : now

	};
	mongoDb.save('news_data', news_info, callback);
}

news.list = function(pageno, pagesize, callback) {
	var condition = {
		$or :[{'smalltitle':'榕榕'},{'smalltitle':'通过'}]
	};
	var condition = {};
	var option = {
		sort:{'create_time': -1}
	}
	mongoDb.where('news_data', condition, option, callback);
}

news.delete = function(news_id, callback) {
	mongoDb.remove('news_data', {'_id':news_id}, callback);
}

module.exports = news;