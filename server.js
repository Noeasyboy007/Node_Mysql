const express = require('express');

const colors = require('colors');

const morgan = require('morgan');

const dotenv = require('dotenv');

const mysqlPool = require('./connection/db');

const getAllStudentList = require('./routes/studentsRoutes')

//configure dotenv
dotenv.config();


//rest object
const app = express();


//middlewares
app.use(express.json());

// For Url hit
app.use(morgan('dev'));


//routes
app.get('/test', (req, res) => {
    res.status(200).send("<h1>NodeJs Mysql App</h1>")
})

app.use('/students',getAllStudentList)


//port 
const PORT = process.env.PORT || 5050;


//conditionaly Lisent
mysqlPool.query('SELECT 1').then(() => {

    console.log('mySql DB connected'.bgGreen.white)
    //listen
    app.listen(PORT, () => { console.log(`Server Started at Port ${PORT}`.bgBlue.white) });
}).catch((error) => {
    console.log(error);
})



