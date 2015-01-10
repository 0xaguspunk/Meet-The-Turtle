'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:SearchlCtrl
 * @description
 * # SearchCtrl
 * Controller of the meetTheTurtleApp
 */

angular.module('meetTheTurtleApp')
  .controller('SearchCtrl', function ($scope, track, playlist) {

    var config = {
      'limit': 6
    };

    $scope.tracks = [];
    $scope.serviceTrack = track;

    $scope.search = function() {
        if($scope.query) {
          $scope.tracks = track.searchTrack($scope.query,config.limit);
        }
        else
          $scope.tracks = [];
    };

    $scope.$watch('serviceTrack.searchedTracks',function(newVal) {
      $scope.tracks = newVal;
      playlist.playlists[1].tracks = newVal;
    });

  });


