angular
    .module('personalAppClient')
    .controller('blogsController', ['$scope', '$http', 'Blog',
    function($scope, $http, Blog) {
        $scope.index = function() {
            $scope.blogs = Blog.query();
        };

        $scope.show = function() {
            var param_id = parseInt(window.location.hash.split('/')[2]);
            $scope.blog = Blog.get({id: param_id});
        };

        $scope.new = function() {
            $scope.blog = new Blog();
        };

        $scope.edit = function() {
            var param_id = parseInt(window.location.hash.split('/')[2]);
            $scope.blog = Blog.get({id: param_id});
        };

        $scope.saveBlog = function(blog) {
            $http.post('localhost:3000/v1/blogs', blog).success(function(response) {
                console.log(response);
            }).error(function(response) {
                console.log(response);
            });
        };

        window.$scope = $scope;
    }]);
