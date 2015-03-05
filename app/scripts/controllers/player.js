'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:PlayingctrlCtrl
 * @description Takes care of all the music player logic.
 * # PlayingctrlCtrl
 * Controller of the meetTheTurtleApp
 */
angular.module('meetTheTurtleApp')
  .controller('PlayerCtrl', function ($scope, playerLogic, playlist, track, YT_event, $mdToast) {

    // Configuration
    $scope.YT_event = YT_event;
    $scope.servicePlayer = playerLogic;
    $scope.serviceTrack = track;

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

    // Event called when song is clicked
    var setSong = function() {

      // Checks if there has been actually a song clicked
      if(playlist.playlists[playerLogic.listPlaying] &&
        playlist.playlists[playerLogic.listPlaying].hasOwnProperty('tracks') &&
        playlist.playlists[playerLogic.listPlaying].tracks[playerLogic.songPlaying]) {

          // If there's been a song clicked we set it
          $scope.track = playlist.playlists[playerLogic.listPlaying].tracks[playerLogic.songPlaying];

          // If we haven't requested the link of the song before we get the link
          if (!playlist.playlists[playerLogic.listPlaying].tracks[playerLogic.songPlaying].link) {

            track.getLink(playlist.playlists[playerLogic.listPlaying].tracks[playerLogic.songPlaying].name,
                          playlist.playlists[playerLogic.listPlaying].tracks[playerLogic.songPlaying].artist);
          }
          // If not, we play directly the song
          else {
            $scope.playSong();
          }
        }
    };

    // Callback called when we get the requested link
    var setLink = function(newVal) {

      if(playlist.playlists[playerLogic.listPlaying] &&
        playlist.playlists[playerLogic.listPlaying].hasOwnProperty('tracks') &&
        playlist.playlists[playerLogic.listPlaying].tracks[playerLogic.songPlaying]) {

        if (newVal) {
          playlist.playlists[playerLogic.listPlaying].tracks[playerLogic.songPlaying].link = newVal;
          $scope.playSong();
        }
      }
    };

    // Set watch services to check when a song is changed and when
    // a requested link has arrived
    $scope.$watch('serviceTrack.requestedLink', setLink);
    $scope.$watch('servicePlayer.songPlaying', setSong);


    // Player events
    // Play and pause buttons
    $scope.play = function (yt_event) {

      if(yt_event == YT_event.PAUSE)
        $scope.pause = true;
      else
        $scope.pause = false;

      $scope.$broadcast(yt_event);
    };

    // Previous and next buttons
    $scope.action = function(yt_event) {

      if(playlist.playlists[playerLogic.listPlaying] &&
        playlist.playlists[playerLogic.listPlaying].hasOwnProperty('tracks') &&
        playlist.playlists[playerLogic.listPlaying].tracks[playerLogic.songPlaying]) {

        // Selects previous song
        if (yt_event == YT_event.PREVIOUS) {
          if (playerLogic.songPlaying != 0)
            playerLogic.songPlaying--;
          else {
            playerLogic.songPlaying = playlist.playlists[playerLogic.listPlaying].tracks.length - 1;
          }
        }
        // Selects next song
        else {
          if (playerLogic.songPlaying + 1 < playlist.playlists[playerLogic.listPlaying].tracks.length)
            playerLogic.songPlaying++;
          else {
            playerLogic.songPlaying = 0;
          }
        }

        $scope.pause = false;
      }
    };

    // Play selected song
    $scope.playSong = function() {
      $scope.videoid = playlist.playlists[playerLogic.listPlaying].tracks[playerLogic.songPlaying].link;
    };

    // Shows a toast when the status of a song has changed from not playing to playing
    $scope.$on(YT_event.STATUS_CHANGE, function(event, data) {

      if(!data.localeCompare("NOT PLAYING")){
        $scope.$broadcast(YT_event.PLAY);
      }
      if(!data.localeCompare("PLAYING")) {
        $mdToast.show(
          $mdToast.simple()
            .content('Playing ' + playlist.playlists[playerLogic.listPlaying].tracks[playerLogic.songPlaying].name
            + ' by ' + playlist.playlists[playerLogic.listPlaying].tracks[playerLogic.songPlaying].artist)
            .position($scope.getToastPosition())
            .hideDelay(1000)
        );
      }
      if(!data.localeCompare("ENDED")){
        $scope.action(YT_event.NEXT);
      }

    });

  });
