
module.exports = new function () {
	this._semaphore = function (n, cb) {
		this.count = n;
		this.cb = cb;
		this.signal = function () {
			this.count--;
			if (this.count == 0) this.cb();
		}
	}


	this.new_semaphore = function (n, cb) {
		return new this._semaphore(n, cb);
	}

}
