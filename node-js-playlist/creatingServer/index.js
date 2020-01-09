const http = require('http');

const server = http.createServer(function (req, res) {
   res.writeHead(200, {'Content-type': 'text/plain'});
   res.end('Hei ninjas');
});

server.listen(3000);
console.log('listening to port 3000..');
