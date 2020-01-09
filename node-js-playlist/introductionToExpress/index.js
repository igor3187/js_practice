const express = require('express');
const app = express();

app.set('view engine', 'ejs');

//app.get('/', (req, res) => res.send('Home Page'));

app.get('/', (req, res) => res.sendFile(__dirname + '/index1.html'));

//app.get('/contact', (req, res) => res.send('Contact Page'));

app.get('/contact', (req, res) => res.sendFile(__dirname + '/contact.html'));

app.get('/profile/:id', (req, res) => res.send('profile with the id: ' + req.params.id));

app.listen(3000);

