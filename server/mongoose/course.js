/**
 * Created by JAYA on 01-05-2015.
 */


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var courseModel =Schema({
    courseName:String,
    courseCode:String,
    courseGroup:String,
    papers:[{
        paperCode:String,
        password:String
    }]
});

var Course = mongoose.model('Course',courseModel);

exports. getCourse = function(req,res){
    Course.find({}).exec(function(err,collection){
        res.json(collection);
    });
};

exports. addCourse = function(req,res) {
    console.log(req.body);
    Course.create(req.body, function (err) {
        if (err) {
            res.status(400);
        }
    });
    res.end();

};