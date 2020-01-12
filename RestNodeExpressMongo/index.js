const express = require('express');
const mongoose = require('mongoose');
const app = express();

//create database
mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://127.0.0.1:27017/user-manager',  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB is connected..'))
    .catch(err => console.log(err));

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//controllers
const UserControl = require('./controllers/UserControl');

//routes
app.post('/api/user/create', UserControl.create);
app.post('/api/user/update', UserControl.update);
app.get('/api/user/retrieve', UserControl.retrieve);
app.delete('/api/user/delete', UserControl.delete);

//start server
app.listen(3000, () => console.log('Server has started on port 3000'));

