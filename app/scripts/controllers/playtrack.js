'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:PlaytrackCtrl
 * @description
 * # PlaytrackCtrl
 * Controller of the meetTheTurtleApp
 */
angular.module('meetTheTurtleApp')
  .controller('PlayTrackCtrl', function ($scope, playerLogic) {

    $scope.playTrack = function(track, playlist) {
      playerLogic.listPlaying = playlist;
      playerLogic.songPlaying = track;
    };

    $scope.playTrackFromList = function(track, playlist) {
      playerLogic.listPlaying = playlist;
      playerLogic.songPlaying = track;
    };

  });
