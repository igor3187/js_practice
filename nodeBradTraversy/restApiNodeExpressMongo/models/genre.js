const mongoose = require('mongoose');

//Genre Schema
const genreSchema = mongoose.Schema({
   name: {
       type: String,
       //required: true
   },
    create_date: {
       type: Date,
        default: Date.now
    }
});

const Genre = module.exports = mongoose.model('Genre', genreSchema);

//Get Genres
module.exports.getGenres = (callBack, limit) => {
    Genre.find(callBack).limit(limit);
};

//Ad Genre
module.exports.addGenres = (genre ,callBack) => {
    Genre.create(genre ,callBack);
};

//Update Genre
module.exports.updateGenres = (id, genre, options, callBack) => {
    let query = {_id: id};
    let update = {
        name: genre.name
    };
    Genre.findOneAndUpdate(query, update, options, callBack);
};

