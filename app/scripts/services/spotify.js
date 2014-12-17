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

    var base_url = 'https://api.spotify.com/v1/search';
    var limit = 6;

    var spotify = {
      getQueryResult: function (query) {

        var promise = $http.get(base_url,{
          params: {
            'type': 'track',
            'q': query,
            'limit': limit
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
