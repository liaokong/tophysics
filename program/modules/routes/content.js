var apibase = require('../tools/apibase');
var content = require('../content/index');
module.exports = function(app) {
    app.get('/lifetime/add', function(req, res) {
        // res.json(apibase.success('ok'));
        params = req.body;
        id = params.id;
        title = params.title;
        tag = params.tag;
        detail =  params.content;
        content.addlifetime(id, detail, title, tag, function(err, data){
            if (err) {
                res.json(apibase.error('ok'));
                return;
            } else {
                res.json(apibase.success(data));
            }
        })

        return;
    })
    //查看时间轴的接口
    app.get('/api/lifetime/list', function(req, res) {
        var user_id = req.session.user;
        content.timelinelist(user_id, function(err, data){
            if (err) {
                res.josn(apibase.error(err));
                return;
            } else {
                res.json(apibase.success(data));
                return;
            }
        })
    })
    //添加时间轴的接口
    app.post('/api/lifetime/add', function(req, res) {

        obj = req.body;
        title = obj.title;
        moument = obj.moument;
        user_id = req.session.user;
        tag = Date.now();

        if (!apibase.isNotNull(title)) {
            res.json(apibase.error('标题不能为空'));
            return;
        }

        if (!apibase.isNotNull(moument)) {
            res.json(apibase.error('记录内容不能为空'));
            return;
        }

        content.addlifetime(user_id, moument, title, tag, function(err, data){
            if (err) {
                res.json(apibase.error('添加失败'));
                return;
            }
            res.json(apibase.success('ok'));
            return;
        })

    })
}