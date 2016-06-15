(function() {
    'use strict';

    angular
        .module('personalAppClient')
        .controller('mainController', ['$scope', function($scope) {

            window.$scope = $scope;
        }]);
})();
