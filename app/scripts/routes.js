'use strict';

var app = angular.module('personalAppClient');
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/main.html',
            controller: 'mainController',
            controllerAs: 'main'
        })
        .when('/sample', {
            templateUrl: '/views/sample.html',
            controller: 'sampleController',
            controllerAs: 'sample'
        })
        .otherwise({
            redirectTo: '/'
        });
});
