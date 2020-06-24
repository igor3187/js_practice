const http = require('http');

//create server
http.createServer((req, res) => {
   res.write('hello');
   res.end();
}).listen(5000, () => console.log('Server is running..'));
