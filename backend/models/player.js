const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const Player = new Schema({
    username: {
        type: String
    }, 
    email: {
        type: String
    }, 
    password: {
        type: String
    }
}, {
    collection: 'players'
});

module.exports = mongoose.model('Player', Player);