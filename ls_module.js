module.exports = function (dir_name, ext_name, callback) {
	var fs = require('fs');
	var end = '.' + ext_name;
	fs.readdir(dir_name, function (err, lst) {
		if (err) {
			callback(err, null);
		} else {
			callback(null, lst.filter(name => name.endsWith(end)));
		}
	});
}

