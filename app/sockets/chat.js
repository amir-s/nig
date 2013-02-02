
module.exports = new function () {
	this.init = function () {
		var sock = this.io;
		this.io.on('connection', function (socket) {
			socket.on('bang', function (d) {
				socket.get('name', function (err, data) {
					if (err) return;
					sock.emit('new_bang', {name: data, bang: d.msg});
				});
			});
			socket.on('set_name', function (d) {
				socket.set('name', d.name, function () {
					sock.emit('new_banger', {name: d.name});
				});
			});
			socket.on('disconnect', function () {
				socket.get('name', function (err, data) {
					if (err) return;
					sock.emit('left_banger', {name: data});
				});
			})

		});

	}
}
