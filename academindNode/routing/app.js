const url = require('url');
const fs = require('fs');

let renderHTML = (path, response) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            response.writeHead(404);
            response.write('File not found');
        } else {
            response.write(data)
        }
        response.end();
    })
};

module.exports = {
    handleRequest: (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        let path = url.parse(req.url).pathname;
        switch (path) {
            case  '/':
                renderHTML('./index.html', res);
                break;
            case '/login':
                renderHTML('./login.html', res);
                break;
            default:
                res.writeHead(404);
                res.write('Route not defined');
                res.end();
        }
    }
};