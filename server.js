const express = require('express');

//rest object
const app = express();

//middlewares



//routes
app.get('/test', (req, res) => {
    res.status(200).send("<h1>NodeJs Mysql App</h1>")
})


//port 
const PORT = 8080;

app.listen(PORT, () => { console.log(`Server Started at Port ${PORT}`) });
