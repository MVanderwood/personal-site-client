angular
    .module('personalAppClient')
    .factory('Blog', ['$resource', function($resource) {
        return $resource('http://localhost:3000/v1/blogs/:id.json');
    }]);
