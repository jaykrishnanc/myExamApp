/**
 * Created by JAYA on 01-05-2015.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var userModel =Schema({
    userName:String,
    userCourseCode:String,
    regNo:String,
    semester:String,
    paperCode:String,
    examMarks:String,
    modMarks:String,
    practicalMarks:String,
    examFinished:Boolean,
    updated:Boolean,
    approved:Boolean,
    examDate:String,
    centreCode:String
});

var User = mongoose.model('User',userModel);

exports.getUserforReg= function(req,res){
    User.find({approved:false}).exec(function(err,collection){
        res.json(collection);
    });
};

exports.getApprovedUsers= function(req,res){
    User.find({approved:true}).exec(function(err,collection){
        res.json(collection);
    });
};

exports.getFinishedExamUsers= function(req,res){
    User.find({examFinished:true}).exec(function(err,collection){
        res.json(collection);
    });
};


