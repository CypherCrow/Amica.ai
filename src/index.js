const express = require('express');
const morgan = require('morgan'); 
const cors = require('cors'); 
const bodyParser = require('body-parser'); 
const app = express(); 

const PORT = process.env.PORT || 4000; 

app.use(cors()); 
app.use(bodyParser.urlencoded({
    extended: false
})); 
app.use(morgan("dev")); 
app.get("/", (req, res) => {
    console.log("Welcome to Amica.ai!");
});
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`); 
})