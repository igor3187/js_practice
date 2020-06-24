const express = require('express');
const app = express();

//app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get('/index', (req, res) => res.sendFile(__dirname + '/app.js'));

app.get('/', (req, res) => res.sendFile(__dirname + '/index1.html'));

app.listen(3000);


