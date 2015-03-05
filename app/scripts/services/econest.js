'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.econest
 * @description Makes request to the econest API
 * # econest
 * Factory in the meetTheTurtleApp.
 */
angular.module('meetTheTurtleApp')
  .factory('econest', function ($http) {

    // Config variables
    var base_url = 'http://developer.echonest.com/api/v4/artist/similar?',
      api_key = 'TV5WADJ9GZQ5FPBR3',
      format = 'json',
      results = 2;

    var econest =  {

      // API call to get the recommended artists
      getRecommendations: function(artists) {

        var info = {
          params: {
          'api_key': api_key,
            'results': results,
            'format': format,
            'name': artists
          }
        };

        var promise = $http.get(base_url,info).then(function (response) {
          return response.data;
        });

        return promise;
      }

    };

    return econest;
  });
