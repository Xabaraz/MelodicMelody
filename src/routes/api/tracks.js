const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) => {
    const tracks = await loadTrackCollecttion();
    res.send(await tracks.find({}).toArray());
});

router.post('/', async (req, res) => {
    const tracks = await loadTrackCollecttion();
    await tracks.insertOne({
        src: req.body.src,
        title: req.body.title,
        album: req.body.album,
    });
    res.status(201).send();
});

router.delete('/:id', async (req, res) => {
    const tracks = await loadTrackCollecttion();
    await tracks.deleteOne({
        _id: new mongodb.ObjectID(req.params.id)
    });
    res.status(200).send();
});

async function loadTrackCollecttion() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://mongo:mongo@cluster0-eqvda.mongodb.net/test', {
            useNewUrlParser: true
        });

    return client.db('vue_express').collection('tracks');
}

module.exports = router;
