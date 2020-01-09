const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    console.log('request was made' + req.url);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.createReadStream(__dirname + '/index1.html').pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === '/index/ninjas') {
        let ninjas = [{name: 'Ruy', age: 23}, {name: 'Yoshi', age: 32}];
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    } else {
        res.writeHead(404, {'Content-type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000);
console.log('server is running...');
