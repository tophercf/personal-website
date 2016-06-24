'use strict';

/* Controllers */

var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('MainCtrl', ['$scope','$rootScope', '$http', '$location', '$anchorScroll',
    function($scope, $rootScope, $http, $location, $anchorScroll) {
        $scope.layout = '';
        $rootScope.layout = '';
        $scope.activate = function(anchor) {
          console.log('clicked the hyperlink');
           $location.hash(anchor);
           $anchorScroll.yOffset = 100;
          $anchorScroll();

            if ($scope.class === "") {
                $scope.class = "active";
            }   
            else {
                $scope.class = "active";
            }
        }; 
    }
]);

mainControllers.controller('HomeCtrl', ['$scope','$rootScope', '$http', '$location',
    function($rootScope, $scope, $http, $location) {
        $scope.layout = 'home'; 
    }
]);
mainControllers.controller('ContactCtrl', ['$scope','$rootScope', '$http', '$location',
    function($rootScope, $scope, $http, $location) {
        $scope.layout = 'contact'; 
    }
]);