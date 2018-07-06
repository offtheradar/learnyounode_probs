var fs = require('fs');
var dir = process.argv[2];
var end = '.' + process.argv[3];
var files_to_show = undefined;
fs.readdir(dir, function callback(err, list) {
		if (err) {
			throw err;
		}
		files_to_show = list.filter(name => name.endsWith(end));
		print_file_names(files_to_show);
});

function print_file_names(files) {
	files.forEach(function(file) {
		console.log(file);
	});
}
