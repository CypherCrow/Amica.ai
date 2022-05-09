const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const createError = require('http-errors')

mongoose.connect('mongodb://127.0.0.1:27017/amica_db')
    .then((x) => {
        console.log('Connected to Amica.AI Database!')
    })
    .catch((err) => {
        console.error(`Error connecting to Amica.AI Database`, err.reason)
    })

const playerRoute = require('./routes/player.route');
const app = express(); 
app.use(bodyParser.json()); 
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/amica-ai')));
app.use('/', express.static(path.join(__dirname, 'dist/amica_ai')));
app.use('/api', playerRoute); 

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

// For 404 errors
app.use((req, res, next) => {
    next(createError(404)); 
});

app.use((err, req, res, next) => {
    console.error(err.message)
    if(!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
});