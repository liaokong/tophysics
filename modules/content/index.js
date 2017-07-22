var news = require('./sub/news');
var daylife = require('./sub/daylife');
var content = {};
content.addnews = function(title, smalltitle, content, callback) {
    news.add(title, smalltitle, content, callback);
}

content.newslist = function(pageno, pagesize, callback) {
    news.list(pageno, pagesize, callback);
}

content.newsdelete = function(news_id, callback) {
    news.delete(news_id, callback);
}

content.addlifetime = function(user_id, content, title, tag, callback) {
    daylife.add(user_id, content, title, tag, callback);
}

content.timelinelist = function(user_id, callback) {
    daylife.list(user_id, callback);
}

module.exports = content;