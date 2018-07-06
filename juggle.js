var http = require('http');
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var items_processed = 0;
var body = '';
urls.forEach((url) => { 
    http.get(url, (res) => {
    res.on('data', (line) => {
        body += line;
    });
    res.on('end',() => )
    items_processed += 1;
    if (items_processed == urls.length) {

    }
  
});
});

function log_to_screen(body) {
    res.on('end', () => {
        console.log(body.length);
        console.log(body);
    });
}