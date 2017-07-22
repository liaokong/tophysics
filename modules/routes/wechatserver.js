var crypto = require('crypto');
var token = 'liaojun';

module.exports = function(app) {
  app.get('/wechatserver/index', function(req, res) {
        var signature = req.query.signature;
        var timestamp = req.query.timestamp;
        var nonce = req.query.nonce;
        var echostr = req.query.echostr;

        var array = new Array(token, timestamp, nonce);
        array.sort();
        var str = array.toString().replace(/,/g,"");

        var shalCode = crypto.createHash("sha1");
        var code = sha1Code.update(str, 'utf-8').digest("hex");;

        if (code == signature) {
            res.send(echostr);
        } else {
            res.send("error");
        }
  })
}