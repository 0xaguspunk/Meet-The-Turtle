'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.econest
 * @description
 * # econest
 * Factory in the meetTheTurtleApp.
 */
angular.module('meetTheTurtleApp')
  .factory('econest', function ($http) {

    // Config variables
    var base_url = 'http://ws.audioscrobbler.com/2.0/',
      api_key = 'fd9cf40d0e96cac3ab91ce64ba819cfa',
      format = 'json';

    var econest =  {

      // API call to get the recommended artists
      getRecommendations: function(artist) {

        var promise = $http.get(base_url,{
          params: {
            'api_key': api_key,
            'method': 'chart.gettoptracks',
            'limit': limit,
            'format': format
          }
        }).then(function (response) {
          return response.data;
        });

        return promise;
      }

    };

    return econest;
  });
