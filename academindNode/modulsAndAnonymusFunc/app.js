const http = require('http');
const module1 = require('./module1');
const module2 = require('./module2');

let onRequest = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(module1.a);
    module1.func();
    res.write(module2.variable);
    module2.myFunc();
    res.end();
};

http.createServer(onRequest).listen(8000);