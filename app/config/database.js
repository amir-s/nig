module.exports = new function() {
	this.name = 'nig';
	this.host = 'localhost';
	this.port = 27017;

	this.use_auth = false;
	this.username = '';
	this.password = '';
	this.collections = ['users', 'numbers'];
}
