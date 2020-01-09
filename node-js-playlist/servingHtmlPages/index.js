const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-type': 'text/html'});
    let myReadStream = fs.createReadStream(__dirname + '/index1.html', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000);
console.log('listening port 3000');

