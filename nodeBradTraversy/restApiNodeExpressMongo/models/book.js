const mongoose = require('mongoose');

//Book Schema
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        //required: true
    },
    genre: {
        type: String,
        //required: true
    },
    description: {
        type: String
    },
    author: {
      type: String,
    },
    publisher: {
      type: String,
    },
    pages: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

const Book = module.exports = mongoose.model('Book', bookSchema);

//Get Books
module.exports.getBook = (callBack, limit) => {
    Book.find(callBack).limit(limit);
};

//Get Book
module.exports.getBookById = (id ,callBack) => {
    Book.findById(id ,callBack);
};

//Add Book
module.exports.addBook = (book ,callBack) => {
    Book.create(book ,callBack);
};

//Update Book
module.exports.updateBook = (id, book, options, callBack) => {
    let query = {_id: id};
    let update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages
    };
    Book.findOneAndUpdate(query, update, options, callBack);
};


