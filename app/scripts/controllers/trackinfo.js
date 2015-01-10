'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:TrackinfoCtrl
 * @description
 * # TrackinfoCtrl
 * Controller of the meetTheTurtleApp
 */
angular.module('meetTheTurtleApp')
  .controller('TrackInfoCtrl', function ($scope, $mdBottomSheet) {

    $scope.removeTrack = function() {
      $mdBottomSheet.hide();
    };

  });
