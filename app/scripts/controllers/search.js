'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:SearchlCtrl
 * @description
 * # SearchCtrl
 * Controller of the meetTheTurtleApp
 */

angular.module('meetTheTurtleApp')
  .controller('SearchCtrl', function ($scope, track, playlist, $mdBottomSheet, $mdToast) {

    var config = {
      'limit': 6
    };

    $scope.tracks = [];

    $scope.search = function() {
        if($scope.query) {
          $scope.tracks = track.searchTrack($scope.query,config.limit);
        }
        else
          $scope.tracks = [];
    };

    // Toast information
    $scope.toastPosition = {
      bottom: false,
      top: true,
      left: true,
      right: true
    };
    $scope.getToastPosition = function() {
      return Object.keys($scope.toastPosition)
        .filter(function(pos) { return $scope.toastPosition[pos]; })
        .join(' ');
    };


    $scope.addTrack = function($event, $index) {

      var track = $scope.tracks[$index];

      $mdBottomSheet.show({
        templateUrl: 'views/addtoplaylist.html',
        controller: 'ListPlaylistCtrl',
        targetEvent: $event
      }).then(function(clickedPlaylist) {

        $mdToast.show(
          $mdToast.simple()
            .content(track.name + ' has been added to ' + playlist.playlists[clickedPlaylist].name)
            .position($scope.getToastPosition())
            .hideDelay(1000)
        );

        playlist.addTrackToPlayList(track,clickedPlaylist);
      });
    };



  });


