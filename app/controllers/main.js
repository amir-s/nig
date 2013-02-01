var ni = require('nodeigniter');

module.exports = new function () {

	this.index = function(req, res, next, name) {
	
	   ni.view.load('section/header.ejs', {
											user: {name: name, email: 'amir.s@acm.org'},
											list: [
													{item: 'item1', val: 'val1'},
													{item: 'item2', val: 'val2'},
													{item: 'item3', val: 'val3'}
												  ]
											}).load('main/main.index.ejs').render();
	//    ni.load.model('a');
		//ni.end();
	}
	this.ff = function (req, res, next) {
		
		var t = 'amir';
		if ($.input.post('name')) {
			t = $.input.post('name');
			$.model('users').register_user({name: t});
		}
		var s = $.lib('semaphore').new_semaphore(1, function () {
			$.end();
		});
		$.model('users').list_users(function (list) {
			$.view.load('test.ejs', {name: t, list: list});
			s.signal();
		});
		
	}
	
};
