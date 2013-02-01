var ni = require('nodeigniter');

module.exports = new function () {
	this.register_user = function (user, cb) {
		this.db.users.save(user, function (err, data) {
			cb && cb();
		});
	}
	this.list_users = function (cb) {
		this.db.users.find(function (err, data) {
			cb && cb(data);
		});
	}
};
