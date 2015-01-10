'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:MainCtrl
 * @description Controller of the Starred view.
 * # MainCtrl
 * Controller of the meetTheTurtleApp
 */
angular.module('meetTheTurtleApp')
  .controller('StarredCtrl', function ($scope, track, playlist) {

    var config = {
      'limit': 10
    };

    $scope.serviceTrack = track;
    track.getTopTracks(config.limit);

    $scope.$watch('serviceTrack.topTracks',function(newVal) {
      $scope.tracks = newVal;
      playlist.playlists[0].tracks = newVal;
    });

  });
