var mongoose = require('mongoose'); 

module.exports = mongoose.model('Leader', {
    name: {
        type: String, 
        position: String, 
        default: ''
    }
})