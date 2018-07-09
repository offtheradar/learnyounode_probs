var http = require('http');
var urls = process.argv.splice(2);
var items_processed = 0;
var body = ['', '', ''];
urls.forEach((url, i) => {
    http.get(url, (res) => {
        res.setEncoding('utf8');
        res.on('data', (line) => {
            body[i] += line;
        });
        res.on('end', () => {
            items_processed += 1;
            if (items_processed == urls.length) {
                body.forEach((txt) => {
                    console.log(txt);
                });
            }
        });
    });
});