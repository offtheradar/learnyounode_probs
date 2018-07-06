var fs = require('fs');
var file_path = process.argv[2];
var data = fs.readFileSync(file_path).toString().split('\n');
console.log(data.length - 1)
