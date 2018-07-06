var http = require('http');
var url = process.argv[2];
var body = '';
http.get(url, (res) => {
    res.on('data', (line) => {
        body += line;
    });
    res.on('end', () => {
        console.log(body.length);
        console.log(body);
    });
});