'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:ProfileCtrl
 * @description Controls playlist show and creation.
 * # ProfileCtrl
 * Controller of the meetTheTurtleApp
 */
angular.module('meetTheTurtleApp')
  .controller('ProfileCtrl', function ($scope, playlist, $mdToast, $mdBottomSheet, $mdSidenav) {

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

    // We set the playlists
    $scope.playlists = playlist.playlists;

    // Creates a new playlist
    $scope.createPlaylist = function() {

      if($scope.playlistName) {
        playlist.createPlaylist($scope.playlistName);

        // Toast confirming the creation of the playlist
        $mdToast.show(
          $mdToast.simple()
            .content($scope.playlistName + ' has been created')
            .position($scope.getToastPosition())
            .hideDelay(1000)
        );

        $scope.playlistName = '';
      }

    };

    // Deletes playlist
    $scope.deletePlaylist = function(playlistIndex) {
      playlist.deletePlaylist(playlistIndex);
    };

    // Removes track from playlist
    $scope.removeTrackFromPlaylist = function($event,songIndex,playlistIndex) {

      $mdBottomSheet.show({
        templateUrl: 'views/infotrack.html',
        controller: 'TrackInfoCtrl',
        targetEvent: $event
      }).then(function() {

        $mdToast.show(
          $mdToast.simple()
            .content(playlist.playlists[playlistIndex].tracks[songIndex].name + ' has been removed from ' +
                      playlist.playlists[playlistIndex].name)
            .position($scope.getToastPosition())
            .hideDelay(1000)
        );

        playlist.removeTrackFromPlaylist(songIndex,playlistIndex);

      });

    };

    $scope.toggleRight = function() {
      $mdSidenav('right').open();
    };

  });
