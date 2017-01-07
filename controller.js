var app = angular.module("myApp",['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    // template :"<b>This is template</b>",
    templateUrl: 'page1.html'
  })
  .when('/helloUser',{
    templateUrl : 'page2.html'
  })
  .otherwise({
    redirectTo :'/'
  });
});
