const express = require('express');
const app = express(); 

const playerRoute = express.Router();
let Player = require('../database/models/Player'); 

app.post('/register', (req, res) => {
    Player.create(req.body, (error, data) => {
        if(error){
            return next(error);
        } else {
            res.json(data); 
        }
    })
});

app.get('/profile/:id', (req, res) => {
    Player.findById(req.params.id, (error, data) => {
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
});

app.put('/profile/:id', (req, res) => {
    Player.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if(error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Player profile updated succesfully!')
        }
    })
});

module.exports = playerRoute; 