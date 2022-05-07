const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

mongoose
    .connect('mongodb://127.0.0.1:27017/amica_ai_database')
    .then((x) => {
        console.log(`Connected to MongoDB database ${x.connections[0].name}`);
    })
    .catch((err) => {
        console.error('Error connecting to mongo', err.reason); 
    })

const playerRoute = require('../backend/routes/player.route');

const app = express(); 
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    }), 
);
app.use(cors()); 
app.use(express.static(path.join(__dirname, 'dist/amica-ai')));
app.use('/', express.static(path.join(__dirname, '__dist/amica-ai'))); 
app.use('/api', playerRoute);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('App connected to port ' + port);
});

app.use((req, res, next) => {
    next(createError(404))
});

app.use((err, req, res, next) => {
    console.error(err.message)
    if(!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
}); 