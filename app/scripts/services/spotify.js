'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.spotify
 * @description
 * # spotify
 * Factory in the meetTheTurtleApp.
 */
angular.module('meetTheTurtleApp')
  .factory('spotify', function ($http) {

    var base_url = 'https://api.spotify.com/v1/search?query=red+hot&offset=0&limit=20&type=track';

    var spotify = {
      getQueryResult: function (query) {

        var promise = $http.get({
          url: 'https://api.spotify.com/v1/search',
          params: {
            'type': 'track',
            'q': query
          }
        }).then(function (response) {
            return response.data.tracks.items;
          });
        return promise;
      }
    };
    // Public API here
    return spotify;
  });
