'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:MenuCtrl
 * @description Takes care of the selected tab on the menu.
 * # MenuCtrl
 * Controller of the meetTheTurtleApp
 */
angular.module('meetTheTurtleApp')
  .controller('MenuCtrl', function ($scope, $location) {

    // Highlights the selected tab on the menu
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
