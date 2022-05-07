const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

let Player = new Schema({
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
    savePoint: {
        type: String
    }}, {
        collection: 'players'
});

module.exports = mongoose.model('Player', Player); 