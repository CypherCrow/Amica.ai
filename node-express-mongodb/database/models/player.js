const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String
    }, 
    email: {
        type: String, 
        required: false
    }, 
    phoneNumber: {
        type: Number
    }, 
    password: {
        type: String
    }, 
    gamePoints: {
        type: Number
    },
    savePoint: {
        type: String
    }
}); 

const Player = mongoose.model('Player', PlayerSchema); 

module.exports = Player;