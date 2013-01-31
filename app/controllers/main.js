var ni = require('nodeigniter');

module.exports = new function () {
    this.go = function () {
		console.log("there");
	}
    this.index = function(req, res, next, name) {
	
	   ni.load.view('section/header.ejs', {
											user: {name: name, email: 'amir.s@acm.org'},
											list: [
													{item: 'item1', val: 'val1'},
													{item: 'item2', val: 'val2'},
													{item: 'item3', val: 'val3'}
												  ]
											}).view('main/main.index.ejs');
    //    ni.load.model('a');
        ni.end();
    }
    this.ff = function (req, res, next) {
    	var t = 'amir';
    	if (ni.input.post('name')) {
    		t = ni.input.post('name');
    	}
		ni.load.view('test.ejs', {name: t});
		ni.end();
    }
    
};
