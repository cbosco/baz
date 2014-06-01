require ('app/filters');
require ('app/services');
require ('app/directives');

// factories sub-module
angular.module('myApp.factories', []);
require ('app/reddit/reddit');

// controllers sub-module
angular.module('myApp.controllers', []);
require ('app/reddit/reddit-list-ctrl');
require ('app/reddit/reddit-detail-ctrl');

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.factories',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/reddit/', {
          controller:'RedditListCtrl',
          templateUrl: 'partials/reddit/list.html'
        })
    .when('/reddit/:permaLink*', {
          controller:'RedditDetailCtrl',
          templateUrl: 'partials/reddit/detail.html'
        })
    .otherwise({
          redirectTo:'/reddit/'
        });
}]);
