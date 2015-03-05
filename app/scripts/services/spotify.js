'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.spotify
 * @description Deals with the requests made to the Spotify API.
 * # spotify
 * Factory in the meetTheTurtleApp.
 */
angular.module('meetTheTurtleApp')
  .factory('spotify', function ($http) {

    var base_url = 'https://api.spotify.com/v1/search';

    var spotify = {

      // API call to get results corresponding to a query
      getSearchResult: function (query, limit) {

        var promise = $http.get(base_url,{
          params: {
            'type': 'track',
            'q': query,
            'limit': limit
          }
        }).then(function (response) {
            return response.data;
        });

        return promise;
      }
    };
    // Public API here
    return spotify;
  });
