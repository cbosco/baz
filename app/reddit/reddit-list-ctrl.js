angular.module('myApp.controllers')
    .controller('RedditListCtrl', ['$scope', 'Reddit', function($scope, Reddit) {
        $scope.data = {};
        Reddit.query({section: 'hot'}).$promise.then(function(responseData) {
            $scope.data.reddits = responseData.data.children;
        });
    }]);
