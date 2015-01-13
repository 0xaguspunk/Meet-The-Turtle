'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.playerLogic
 * @description
 * # playerLogic
 * Factory in the meetTheTurtleApp.
 */
angular.module('meetTheTurtleApp')
  .factory('playerLogic', function () {

    var playerLogic = {

      songPlaying: '',
      listPlaying: ''

    };

    return playerLogic;

  });
