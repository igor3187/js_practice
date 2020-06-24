const http = require('http');

http.createServer((req, res) => {
    let path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) { 
        case '':
            res.writeHead(200, {'Content-type': 'text/plain'});
            res.end('Homepage');
            break;
        case '/about':
            res.writeHead(200, {'Content-type': 'text/plain'});
            res.end('O');
            break;
        default:
            res.writeHead(404, {'Content-type': 'text/plain'});
            res.end('Page not found');
            break;
    }
}).listen(3000);

console.log(`Server is running on port 3000`);