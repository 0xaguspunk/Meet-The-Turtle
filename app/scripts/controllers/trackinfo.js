'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:TrackinfoCtrl
 * @description Handles the track info bottom sheet.
 * # TrackinfoCtrl
 * Controller of the meetTheTurtleApp
 */
angular.module('meetTheTurtleApp')
  .controller('TrackInfoCtrl', function ($scope, $mdBottomSheet) {

    $scope.removeTrack = function() {
      $mdBottomSheet.hide();
    };

  });
