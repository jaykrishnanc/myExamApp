/**
 * Created by JAYA on 01-05-2015.
 */


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var courseModel =Schema({
    courseName:String,
    courseCode:String,
    courseGroup:String,
    semesters:String
    });

var paperModel =Schema({
    courseCode:String,
    paperCode:String,
    paperSem:String,
    password:String
});

var Course = mongoose.model('Course',courseModel);
var Paper = mongoose.model('Paper',paperModel);

exports. getCourse = function(req,res){
    Course.find({}).exec(function(err,collection){
        res.json(collection);
    });
};

exports. getPaper = function(req,res){
    Paper.find({}).exec(function(err,collection){
        res.json(collection);
    });
};

exports. addCourse = function(req,res,next) {
    console.log(req.body);
    Course.create(req.body, function (err) {
        if (err) {
            res.status(400);
        }

    });
    res.end();

};

exports. addPaper = function(req,res) {
    console.log(req.body);
    Paper.create(req.body, function (err) {
        if (err) {
            res.status(400);
        }

    });
    res.end();

};