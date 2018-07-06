var ls = require('./ls_module.js');
var dir_name = process.argv[2];
var end = process.argv[3];
ls(dir_name, end, callback);

function callback(err, list) {
	if (err) {
		throw err;
    }
    else {
	    print_file_names(list);
    }
}

function print_file_names(files) {
	files.forEach(function(file) {
		console.log(file);
	});
}
