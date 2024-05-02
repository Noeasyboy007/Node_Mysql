const express = require('express');

const colors = require('colors');

const morgan = require('morgan');

//rest object
const app = express();


//middlewares
// For Url hit
app.use(morgan('dev'));


//routes
app.get('/test', (req, res) => {
    res.status(200).send("<h1>NodeJs Mysql App</h1>")
})


//port 
const PORT = 8080;

app.listen(PORT, () => { console.log(`Server Started at Port ${PORT}`.bgBlue.white) });

