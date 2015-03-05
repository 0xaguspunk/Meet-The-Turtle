'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:AddlistCtrl
 * @description Handles adding a track to a playlist
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

    // Adds a track and shows a toast indicating which song has been added to
    // what playlist
    $scope.addTrack = function($event, $index) {

      var track = $scope.tracks[$index];

      // Shows the playlists
      $mdBottomSheet.show({
        templateUrl: 'views/addtoplaylist.html',
        controller: 'ListPlaylistCtrl',
        targetEvent: $event
      }).then(function(clickedPlaylist) {

        // When the playlist is chosen shows an informative toast
        $mdToast.show(
          $mdToast.simple()
            .content(track.name + ' has been added to ' + playlist.playlists[clickedPlaylist].name)
            .position($scope.getToastPosition())
            .hideDelay(1000)
        );

        // Adds the song to the specified playlist
        playlist.addTrackToPlayList(track,clickedPlaylist);

      });
    };

    // Same as addTrack but the index is not needed
    $scope.addTrackFromPlayer = function($event, clicked_track) {

      var track = clicked_track;

      // Shows the playlists
      $mdBottomSheet.show({
        templateUrl: 'views/addtoplaylist.html',
        controller: 'ListPlaylistCtrl',
        targetEvent: $event
      }).then(function(clickedPlaylist) {

        // When the playlist is chosen shows an informative toast
        $mdToast.show(
          $mdToast.simple()
            .content(track.name + ' has been added to ' + playlist.playlists[clickedPlaylist].name)
            .position($scope.getToastPosition())
            .hideDelay(1000)
        );

        // Adds the song to the specified playlist
        playlist.addTrackToPlayList(track,clickedPlaylist);

      });
    };

  });
