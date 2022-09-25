const express = require("express");
const mongoose = require('mongoose');
const { urlencoded } = require('body-parser');

const app = express();

// connect to db
try{
    const url = 'mongodb://localhost/mern-task';
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).catch(error => {console.log("error: "+error)});
    const con = mongoose.connection;
    con.on('open', () => {
        console.log("connected to database....");
    });
}catch(exception){
    console.log('error: '+exception);
}

// Middlewares
app.use(express.json());

// Routes
const UserAdd = require("./router/UserAdd")

// Route Middlewares
app.use('/', UserAdd)

// Start Page of the Server
app.get('/', (req, res) => {
    res.send("Hi this is the test run");
});

app.listen(8000, ()=>{
    console.log("Server is up and Running!")
});