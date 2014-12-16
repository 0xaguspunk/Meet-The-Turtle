'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the meetTheTurtleApp
 */
angular.module('meetTheTurtleApp')
  .controller('MenuCtrl', function ($scope, $location) {
    $scope.go = function ( path ) {
      $location.path( path );
    };
  });
