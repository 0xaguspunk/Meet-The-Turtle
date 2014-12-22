'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.spotify
 * @description
 * # spotify
 * Factory in the meetTheTurtleApp.
 */
angular.module('meetTheTurtleApp')
  .factory('spotify', function ($http, $q) {

    var base_url = 'https://api.spotify.com/v1/search';

    var deffered = $q.defer();
    var data = [];

    var spotify = {

      // API call to get results corresponding to a query
      getSearchResult: function (query, limit) {

        var promise = $http.get(base_url,{
          params: {
            'type': 'track',
            'q': query,
            'limit': limit
          }
        }).success(function (response) {
          data = response;
          deffered.resolve();
        });
        return deffered.promise;
      },

      getData: function() {
        return data;
      }
    };
    // Public API here
    return spotify;
  });
