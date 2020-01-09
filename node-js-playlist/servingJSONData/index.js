const http = require('http');

const server = http.createServer(function (req, res) {
   res.writeHead(200, {'Content-type': 'application/json'});
   let muObj = {
       name: 'Yoshi',
       job: 'ninja',
       age: 32
   };

   res.end(JSON.stringify(muObj));
});

server.listen(3000);
console.log('server is running..');
