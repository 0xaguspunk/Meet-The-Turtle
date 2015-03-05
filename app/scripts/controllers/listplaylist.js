'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:ListplaylistCtrl
 * @description Shows a list of the available playlist created
 *              by the user.
 * # ListplaylistCtrl
 * Controller of the meetTheTurtleApp
 */
angular.module('meetTheTurtleApp')
  .controller('ListPlaylistCtrl', function ($scope, playlist, $mdBottomSheet) {

    $scope.playlists = playlist.playlists;

    // When the playlist is chosen the index is sent to addTrack
    $scope.playListClick = function($index) {
      $mdBottomSheet.hide($index);
    };

  });
