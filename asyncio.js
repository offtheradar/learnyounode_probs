var fs = require('fs');
var file_name = process.argv[2];
var num_lines = undefined;

function count_num_lines()
{
	fs.readFile(file_name, function callback(err, data) {
			if (err) {
					throw err;
			}
			num_lines  = data.toString().split('\n').length - 1;
			print_num_lines(num_lines);
	});
}

function print_num_lines(num_lines) {
	console.log(num_lines);
}

count_num_lines();
