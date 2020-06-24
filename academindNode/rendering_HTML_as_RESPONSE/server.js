const http = require('http');
const fs = require('fs');

let onRequest = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./api/index.html', function (err, data) {
        if (err) {
            res.writeHead(404);
            res.write('File not found');
        } else
            res.write(data);
        res.end();
    });
};

http.createServer(onRequest).listen(8000);