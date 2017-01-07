var app = angular.module("myApp",[]);

app.controller("people",function($scope,$http){
  $http.get('database.json')
  .success(function(response){
    $scope.persons = response.records;
    //$scope.person = $scope.persons[0].Password;
  });
});
