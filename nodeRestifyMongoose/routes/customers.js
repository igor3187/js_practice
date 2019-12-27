const errors = require('restify-errors');

module.exports = server => {
    server.get('/customer', (req, res, next) => {
        res.send({msg: 'test'});
        next();
    });
};
