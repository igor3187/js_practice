const express = require('express');
const mongoose = require('mongoose');
const app = express();

//create database
mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://127.0.0.1:27017/user-manager', {
    useMongoClient: true,
})
    .then(() => console.log('DB is connected..'))
    .catch(err => console.log(err));

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//start server
app.listen(3000, () => console.log('Server has started on port 3000'));

