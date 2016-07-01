'use strict';

angular.module('personalAppClient').
    config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/views/main.html',
                controller: 'mainController',
                controllerAs: 'main'
            })
            // blogsController --------------
            .when('/blogs', {
                templateUrl: '/views/blogs_index.html',
                controller: 'blogsController',
                controllerAs: 'blogs'
            })
            .when('/blogs/new', {
                templateUrl: '/views/blogs_new.html',
                controller: 'blogsController',
                controllerAs: 'blogs'
            })
            .when('/blogs/:id', {
                templateUrl: '/views/blogs_show.html',
                controller: 'blogsController',
                controllerAs: 'blogs'
            })
            .when('/blogs/:id/edit', {
                templateUrl: '/views/blogs_edit.html',
                controller: 'blogsController',
                controllerAs: 'blogs'
            })
            // .when('/sample', {
            //     templateUrl: '/views/sample.html',
            //     controller: 'sampleController',
            //     controllerAs: 'sample'
            // })
            .otherwise({
                redirectTo: '/'
            });
    });
