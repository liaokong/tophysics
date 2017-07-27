var field = {};
var redis = require('../../../db/redis');

//获取我现在有得田地信息
field.my = function(name, callback) {
	redis.hgetall('field:'+name, function(err, result) {
		if (err) {
			callback(1, '内部错误', null);
			return;
		}
		if (result == undefined) {
			callback(0, '暂无', []);
			return;
		}

		callback(0, '', result);
		return;
	})

	field.add = function(name, field, callback) {
		redis.hgetall('field:'+name, function(err, result) {
			if (err) {
				callback(1, '内部错误', null);
				return;
			}
			var field_new = new Array();
			field_new.push(field);
			if (result == undefined) {
				var end_field = field_new;
			} else {
				var field_old  = new  Array();
				for (k in result) {
					field_old.push(result[k]);
				}
				var end_field = new Array();
				for (kk in field_old) {
					if (field == field_old[kk]) {
						end_field.push(field_old[kk]);
					}
				}
			}
			redis.hmset('field:'+name, end_field, function(err1, result1) {
				if (err1) {
					callback(1, '内部错误', null);
					return;
				}
				callback(0, '', end_field);
				return;
			})
		})
	}
}

field.update = function(name, id, info, callback) {
	redis.hset('field:'+name, id, info, function(err, result) {
		if (err) {
			callback(1, '内部错误', null);
			return;
		}
		callback(0, '', info);
		return;
	})
}
module.exports = field;