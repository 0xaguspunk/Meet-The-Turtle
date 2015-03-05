'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.playerLogic
 * @description Service used as bridge of communication between player and
 *              playTrack.
 * # playerLogic
 * Factory in the meetTheTurtleApp.
 */
angular.module('meetTheTurtleApp')
  .factory('playerLogic', function () {

    // Currently playing song
    var playerLogic = {
      // Song index
      songPlaying: '',
      // List index
      listPlaying: ''

    };

    return playerLogic;

  });
