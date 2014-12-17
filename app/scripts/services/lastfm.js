'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.lastfm
 * @description
 * # lastfm
 * Factory in the meetTheTurtleApp.
 */
angular.module('meetTheTurtleApp')
  .factory('lastfm', function ($http) {

    var lastfm = {

      base_url: 'http://ws.audioscrobbler.com/2.0/',
      api_key: 'fd9cf40d0e96cac3ab91ce64ba819cfa',
      limit: 5,
      method: 'chart.gethypedtracks',
      format: 'json',

      getHypedTracks: function() {

        var promise = $http.get(this.base_url,{
          params: {
            'api_key': this.api_key,
            'method': this.method,
            'limit': this.limit,
            'format': this.format
          }
        }).then(function (response) {

          return  response.data.tracks.track;
        });
        return promise;
      }

    };
    return lastfm;

  });

