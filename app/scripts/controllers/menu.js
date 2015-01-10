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

      if(!path.localeCompare('/player')) {
        $location.path( path );
        $scope.player = true;
      }
      else {
        $scope.player = false;
        $location.path( path );
      }
    };

  });
