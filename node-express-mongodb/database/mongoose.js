const mongoose  = require('mongoose'); 

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/amica_ai_database', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log());

module.exports = mongoose; 