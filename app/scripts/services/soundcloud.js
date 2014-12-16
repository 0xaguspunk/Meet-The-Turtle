'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.soundcloud
 * @description
 * # soundcloud
 * Factory in the meetTheTurtleApp.
 */
angular.module('meetTheTurtleApp')
  .factory('soundcloud', function ($http) {

    var songs = {};

    songs.getPopularSongs = function () {
      return $http.get();
    };

    // Public API here
    return songs;
  });
