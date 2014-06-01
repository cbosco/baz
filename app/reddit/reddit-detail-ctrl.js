angular.module('myApp.controllers')
    .controller('RedditDetailCtrl', ['$scope', '$routeParams', 'Reddit', function($scope, $routeParams, Reddit) {

        $scope.data = {};
        Reddit.get({permaLink: $routeParams.permaLink}).$promise.then(function(responseData) {
            $scope.data.reddit = responseData[0].data.children[0];
            $scope.data.comments = responseData[1].data.children;

        });
    }]);
