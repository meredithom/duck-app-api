//imports
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

const port = 3000;


app.use(cors());
app.use(bodyParser.json());

//link to frontend
app.use(express.static(path.join(__dirname,'D:\repos\duck-app\src\index.html')));

app.use('/api', route);

//test
app.get('/',(req, res)=>{
    res.send('quack');
});

//start
app.listen(port,()=> {
    console.log('Server started at port:'+port);
});