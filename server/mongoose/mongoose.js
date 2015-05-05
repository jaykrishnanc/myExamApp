var mongoose = require('mongoose');


mongoose.connect('mongodb://jaya:jaya@ds031882.mongolab.com:31882/jaya-test',function(error){
    if(error){
        console.log(error);
    }
});

var db = mongoose.connection;
db.on('error',function callback(err){
    console.log("database connection failed error : "+err);
});
db.once('open',function callback(){
    console.log("Database connection Successful");
});
