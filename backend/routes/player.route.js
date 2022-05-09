const express = require('express'); 
const app = express(); 
const playerRoute = express.Router(); 

const Player = require('../models/Player');

playerRoute.route('/create').post((req, res, next) => {
    Player.create(req.body, (error, data) => {
        if(error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

playerRoute.route('/').get((req, res) => {
    Player.find((error, data) => {
        if(error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

playerRoute.route('/read/:id').get((req, res) => {
    Player.findById(req.params.id, (error, data) => {
        if(error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
}); 

playerRoute.route('/update/:id').put((req, res, next) => {
    Player.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if(error) {
            return next(error)
            console.log(error)
        } else {
            res.json(data)
            console.log('Player data updated successfully')
        }
    })
});

module.exports = playerRoute;