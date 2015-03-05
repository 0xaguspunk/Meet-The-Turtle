'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:RecommendationsCtrl
 * @description Handles recommendations.
 * # RecommendationsCtrl
 * Controller of the meetTheTurtleApp
 */
angular.module('meetTheTurtleApp')
  .controller('RecommendationsCtrl', function ($scope, $mdSidenav, playerLogic, recommendations, playlist) {

    $scope.servicePlayedTrack = playerLogic;
    $scope.serviceRecommendations = recommendations;
    $scope.artists = [];

    // Callback function that is called each time a song is played
    var makeRecommendation = function() {

      if(playlist.playlists[playerLogic.listPlaying] &&
        playlist.playlists[playerLogic.listPlaying].hasOwnProperty('tracks') &&
        playlist.playlists[playerLogic.listPlaying].tracks[playerLogic.songPlaying]) {

        var artist = playlist.playlists[playerLogic.listPlaying].tracks[playerLogic.songPlaying].artist;

        // Recommendations are made from the artists
        $scope.tracks = recommendations.getRecommendations(artist);

      }
    };

    $scope.$watch('serviceTrack.songPlaying', makeRecommendation);

    $scope.$watch('serviceRecommendations.recommendations',function(newVal) {
      $scope.tracks = newVal;
      playlist.playlists[2].tracks = newVal;
    });

  });
