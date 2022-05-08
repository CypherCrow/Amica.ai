const express = require('express'); 
const cors = require('cors');
const app = express(); 

const mongoose = require('./database/mongoose');

/*
    localhost:3000 - backend api 
    localhost:4200 - front-end
*/

// use() allows use to create middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Reqeusted-With, Content-Type, Accept");
    next();
})


app.use(express.json()); 
app.listen(3000, () => console.log('Server connected on port 3000')); 