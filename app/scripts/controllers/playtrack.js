'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:PlaytrackCtrl
 * @description Sets the songs clicked to be played.
 * # PlaytrackCtrl
 * Controller of the meetTheTurtleApp
 */
angular.module('meetTheTurtleApp')
  .controller('PlayTrackCtrl', function ($scope, playerLogic) {

    // Sets the index of the playlist and track clicked inside
    // the player logic service. The player controller will then
    // capture the change and handle it.
    $scope.playTrack = function(track, playlist) {
      playerLogic.listPlaying = playlist;
      playerLogic.songPlaying = track;
    };

    $scope.playTrackFromList = function(track, playlist) {
      playerLogic.listPlaying = playlist;
      playerLogic.songPlaying = track;
    };

  });
