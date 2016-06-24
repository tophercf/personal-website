'use strict';

/* App Module */

var websiteApp = angular.module('websiteApp', [
    'ngRoute',
    'ngAnimate',
    'mainControllers'
]);

websiteApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'MainCtrl'
        }).
        when('/experience', {
            templateUrl: 'pages/experience.html',
            controller: 'MainCtrl'
        }).
        when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'ContactCtrl'
        }).
        when('/', {
            templateUrl: 'pages/home.html',
            controller: 'HomeCtrl'
        }).
        otherwise({
            redirectTo: 'pages/home.html',
            controller: 'MainCtrl'
        });
    }
]);
websiteApp.run(function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(ev, data) {
        if (data.$route && data.$route.controller)
            $rootScope.controller = data.$route.controller;
    })
});