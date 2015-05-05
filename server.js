/**
 * Created by JAYA on 01-05-2015.
 */
var express = require('express'),

    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan');

var app = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(logger('combined'));


require('./server/mongoose/mongoose');
var courses = require('./server/mongoose/course');

app.get('/api/course',courses.getCourse);
app.post('/api/course',courses.addCourse);

app.listen(2000,function(){
    console.log("Server Started on Port:2000");
});