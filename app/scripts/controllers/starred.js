'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:MainCtrl
 * @description Controller of the Starred view.
 * # MainCtrl
 * Controller of the meetTheTurtleApp
 */
angular.module('meetTheTurtleApp')
  .controller('StarredCtrl', function ($scope, track) {

    var config = {
      'limit': 10
    };

    $scope.loading = true;
    $scope.tracks = track.getTopTracks(config.limit);
    $scope.loading = false;
  });
