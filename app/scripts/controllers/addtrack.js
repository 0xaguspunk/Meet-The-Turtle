'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:AddlistCtrl
 * @description
 * # AddlistCtrl
 * Controller of the meetTheTurtleApp
 */
angular.module('meetTheTurtleApp')
  .controller('AddTrackCtrl', function ($scope, playlist, $mdBottomSheet, $mdToast) {

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

    $scope.addTrackFromPlayer = function($event, clicked_track) {

      var track = clicked_track;

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
