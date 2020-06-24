const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//get companies
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
})

//add company
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
})

//get company
router.get('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    const post = await posts.findOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).json(post);
})

//delete company
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})

async function loadPostsCollection() {
    const client = await mongodb.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true});

    return client.db('spa').collection('companies');
}

module.exports = router;