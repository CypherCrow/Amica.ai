const express = require('express'); 
const app = express();
var mongoose = require('mongoose'); 
var bodyParser = require('body-parser');

const port = 3000; 

var db = require('./config/db');
console.log("connecting...", db);
mongoose.connect(db.url); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Welcome to Amic.ai!'));

app.get('/tproute', function (req, res) {
   res.send('This is routing for the application developed using Node and Express...');
}); 

var Leader = require('./models/leader');

app.get('/api/leaders', (req, res) => {
        Leader.find((err, leaders) => {
        if(err)
            res.send(err)
        res.json(leaders); 
    })
})

app.post('/api/leaders/send', (req, res) => {
    var leader = new Leader();
    leader.name = req.body.name;
    leader.save((err) => {
        if(err)
            res.send(err);
        res.json({ message: `Leader ${leader.name} created!`}); 
    }); 
}); 

app.delete('/api/leaders/:leader_id', (req, res) => {
    Leader.remove({
        _id: req.params.leader_id
    }, (err, bear) => {
        if(err)
            res.send(err);
        res.json({ message: 'Leader successfully deleted'})
    })
})

app.listen(port, () => console.log(`Amic.ai listening on port ${port}!`)); 
