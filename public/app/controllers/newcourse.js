/**
 * Created by JAYA on 04-05-2015.
 */
angular.module('ExamApp').controller('newCourseController',function($scope,$http){

    $scope.Add = function(course,paper){
        course.papers.push(paper);
    };


    $scope.Save = function(course,paper){


        console.log(course);
        $http({
            method:'POST',
            url:'/api/course',
            data:course
        })
            .success(function(){
                course=[];
            })

    };

});