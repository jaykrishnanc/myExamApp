/**
 * Created by JAYA on 04-05-2015.
 */
angular.module('ExamApp').controller('courseController',function($scope,$http){
    $http.get('/api/course').success(function(data){
        console.log(data);
        $scope.courses=data;
    })
});