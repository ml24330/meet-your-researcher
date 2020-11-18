const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { Score } = require('../models');
require('dotenv').config();

const app = express();

mongoose.connect(`mongodb+srv://${process.env.MONGODB_NAME}:${process.env.MONGODB_PW}@cluster0.swmsg.mongodb.net/Cluster0?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connection established'));

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'build')));

app.get('/records', async (req, res) => {
    const scores = await Score.find({});
    res.send(scores.sort((a,b) => {
        return a.time > b.time ? 1 : -1
    }));
});

app.delete('/record/:id', async (req, res) => {
    const score = await Score.findOneAndDelete({_id: req.params.id});
    if(!score){
        res.status(404).send({'error': 'record not found'});
    }else{
        res.send(score);
    }
});

app.post('/record', express.json(), async (req, res) => {
    const score = new Score({name: req.body.name, time: parseInt(req.body.time)});
    await score.save();
    res.send(score);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(8000, () => console.log('Started listening on port 8000'));

