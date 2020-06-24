const http = require('http');
const url = require('url');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const handlers = {};
const database = {};
let db;

database.create = (newbie, callback) => {
    db.collection('newbies').insertOne(newbie, (err, result) => {
        if (!err && result) {
            callback(null, result);
        } else {
            callback(err);
        }
    })
};

database.read = (newbieId, callback) => {
    const id = new ObjectId(newbieId);
    db.collection('newbies').findOne({_id: id}, (err, result) => {
        if (!err && result) {
            callback(null, result);
        } else {
            callback(err);
        }
    })
};

database.update = (newbieId, newbie, callback) => {
    const id = new ObjectId(newbieId);
    db.collection('newbies').findOneAndUpdate({_id: id}, newbie, {returnOriginal: false}, (err, result) => {
        if (!err && result) {
            callback(null, result);
        } else {
            callback(err);
        }
    })
};

database.delete = (newbieId, callback) => {
    const id = new ObjectId(newbieId);
    db.collection('newbies').findOneAndUpdate({_id: id}, (err, result) => {
        if (!err && result) {
            callback(null, result);
        } else {
            callback(err);
        }
    })
};

handlers.newbies = (parsedReq, res) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.includes(parsedReq.method)) {
        handlers._newbies[parsedReq.method](parsedReq, res);
    } else {
        res.writeHead(400);
        res.end('Not an accepted method..');
    }
};

handlers._newbies = {};

handlers._newbies.get = (parsedReq, res) => {
    const newbieId = parsedReq.queryStringObject.id;
    database.read(newbieId, (err, result) => {
        if (!err && result) {
            res.end(JSON.stringify(result));
        } else {
            res.end(err);
        }
    });
};

handlers._newbies.post = (parsedReq, res) => {
    const newbie = JSON.parse(parsedReq.body);
    database.create(newbie, (err, result) => {
        if (!err && result) {
            res.end(JSON.stringify(result.ops[0]));
        } else {
            res.end(err);
        }
    });
};

handlers._newbies.put = (parsedReq, res) => {
    const newbie = JSON.parse(parsedReq.body);
    const newbieId = parsedReq.queryStringObject.id;

    database.update(newbieId, newbie, (err, result) => {
        if (!err && result) {
            res.end(JSON.stringify(result.value));
        } else {
            res.end(err);
        }
    });
};

handlers._newbies.delete = (parsedReq, res) => {
    const newbieId = parsedReq.queryStringObject.id;
    database.delete(newbieId, (err, result) => {
        if (!err && result) {
            res.end(JSON.stringify(result.value));
        } else {
            res.end(err);
        }
    });
};

handlers.notFound = (parsedReq, res) => {
    res.writeHead(404);
    res.end('Route does not exist')
};

const router = {
    'newbies': handlers.newbies
};

const server = http.createServer((req, res) => {
    const parsedReq = {};

    parsedReq.parsedUrl = url.parse(req.url, true);
    parsedReq.path = parsedReq.parsedUrl.pathname;
    parsedReq.trimmedPath = parsedReq.path.replace(/^\/+|\/+$/g, '');
    parsedReq.methods = req.method.toLowerCase();
    parsedReq.headers = req.headers;
    parsedReq.queryStringObject = parsedReq.parsedUrl.query;

    let body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
    });

    req.on('end', () => {
        body = Buffer.concat(body).toString();
        parsedReq.body = body;

        const routedHandler = typeof (router[parsedReq.trimmedPath]) !== 'undefined' ? router[parsedReq.trimmedPath] : handlers.notFound;

        routedHandler(parsedReq, res);

    });

});

MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true}, (err, client) => {
    if (err) {
        return console.log('Could not connect to mongodb server\n', err);
    }
    console.log('Connected to database...');
    db = client.db('node_newbies');
});

server.listen(3000, () => console.log('Listening on port 3000'));