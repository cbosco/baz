// Detail example: http://www.reddit.com/r/funny/comments/26z0ty/jaden_smith_wore_a_white_batman_costume_to_kim.json
angular.module('myApp.factories')
    .factory('Reddit', ['$resource', function($resource) {
        return $resource(
            'http://www.reddit.com/:section:permaLink.json',
            {},
            {
                'query': {
                    method: 'GET',
                    isArray: false
                },
               'get': {
                    isArray: true
                }
            });
    }]);
