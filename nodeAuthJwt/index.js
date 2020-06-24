const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('express').Router();
const User = require('./model/User');

//const dotEnv = require('dotenv');
//let MongoClient = require('mongodb');

//dotEnv.config();

//connect to DB
// mongoose.connect('mongodb://127.0.0.1:27017/jwt',
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => console.log('Connected to DB..'));

//get posts
// router.get('/', async (req, res) => {
//     const posts = await loadPostsCollection();
//     res.send(await posts.find({}).toArray());
// });
// //add posts
// router.post('/', async (req, res) => {
//     console.log(req.body);
//     const posts = await loadPostsCollection();
//     await posts.insertOne({
//         text: req.body.text,
//         createdAt: new Date()
//     });
//     res.status(201).send();
// });

router.post('/register', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        date: req.body.date
    });
    try {
        const savedUser = await user.save();
        savedUser.loadCollection();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }

});

module.exports = router;

const url = "mongodb://127.0.0.1:27017/jwt";

async function loadPostsCollection() {
    const client = await mongoose.connect(url, {useUnifiedTopology: true},
        () => console.log('Connected to DB...'));

    return client.db('vue_express').collection('deved');
}

//import routes
const authRoute = require('./routes/auth');

//middleware
app.use(express.json());

//route middle wares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server running on port 3000..'));
