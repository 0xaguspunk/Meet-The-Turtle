'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:ListplaylistCtrl
 * @description
 * # ListplaylistCtrl
 * Controller of the meetTheTurtleApp
 */
angular.module('meetTheTurtleApp')
  .controller('ListPlaylistCtrl', function ($scope, playlist, $mdBottomSheet) {

    $scope.playlists = playlist.playlists;

    $scope.playListClick = function($index) {
      $mdBottomSheet.hide($index);
    };

  });
