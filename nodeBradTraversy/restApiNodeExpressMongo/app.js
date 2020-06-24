const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

Genre = require('./models/genre');
Book = require('./models/book');

//Connect to mongo
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;

app.get('/', (req, res) => {
    res.send('Pleas use /api/books or api/genres');
});

app.get('/api/genres', (req, res) => {
    Genre.getGenres((err, genres) => {
        if (err) throw err;

        res.json(genres);
    })
});

app.post('/api/genres', (req, res) => {
    const genre = req.body;
    Genre.addGenres(genre, (err, genres) => {
        if (err) throw err;

        res.json(genres);
    });
});

app.put('/api/genres/:id', (req, res) => {
    const id = req.params._id;
    const genre = req.body;
    Genre.updateGenres(id, genre, {}, (err, genres) => {
        if (err) throw err;

        res.json(genres);
    });
});

app.get('/api/book', (req, res) => {
    Book.getBook((err, books) => {
        if (err) throw err;
        res.json(books);
    })
});

app.get('/api/book/:_id', (req, res) => {
    Book.getBookById(req.params._id, (err, book) => {
        if (err) throw err;
        res.json(book);
    })
});

app.post('/api/books', (req, res) => {
    const book = req.body;
    Book.addBook(book, (err, book) => {
        if (err) throw err;
        res.json(book);
    });
});

app.put('/api/books/:id', (req, res) => {
    const id = req.params._id;
    const book = req.body;
    Book.updateBook(id, book, {}, (err, book) => {
        if (err) throw err;

        res.json(book);
    });
});

app.listen(3000);
console.log('Server is running on port 3000');
