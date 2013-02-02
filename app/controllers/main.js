var ni = require('nodeigniter');

module.exports = new function () {

	this.index = function(req, res, next, name) {
		$.view.load('index.ejs').render();
	}
	// this.ff = function (req, res, next) {
		
	// 	var t = 'amir';
	// 	if ($.input.post('name')) {
	// 		t = $.input.post('name');
	// 		$.model('users').register_user({name: t});
	// 	}
	// 	var s = $.lib('semaphore').new_semaphore(1, function () {
	// 		$.end();
	// 	});
	// 	$.model('users').list_users(function (list) {
	// 		$.view.load('test.ejs', {name: t, list: list});
	// 		s.signal();
	// 	});
		
	// }
	
};
