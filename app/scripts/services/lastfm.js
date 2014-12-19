'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.lastfm
 * @description Deals with the requests made to the Lastfm API.
 * # lastfm
 * Factory in the meetTheTurtleApp.
 */
angular.module('meetTheTurtleApp')
  .factory('lastfm', function ($http, $q) {

    // Config variables
    var base_url = 'http://ws.audioscrobbler.com/2.0/',
        api_key = 'fd9cf40d0e96cac3ab91ce64ba819cfa',
        format = 'json';

    var deffered = $q.defer();
    var data = [];

    var lastfm =  {

      // API call to get the top tracks
      getTopTracks: function(limit) {

        var promise = $http.get(base_url,{
          params: {
            'api_key': api_key,
            'method': 'chart.gettoptracks',
            'limit': limit,
            'format': format
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
    return lastfm;

  });

