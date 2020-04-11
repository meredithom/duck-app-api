//imports
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/feedingSchedule');
mongoose.connection.on('connected', ()=>{
    console.log('connected to db @ 27017');
});

mongoose.connection.on('error', (error)=>{
    if(error){
        console.log('error in db connection'+ error);
    }
});

const port = 3000;


app.use(cors());
app.use(bodyParser.json());


app.use('/api', route);

//test
app.get('/',(req, res)=>{
    res.send('quack');
});

//start
app.listen(port,()=> {
    console.log('Server started at port:'+ port);
});