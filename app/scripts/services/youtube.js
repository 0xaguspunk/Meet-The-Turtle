'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.youtube
 * @description Deals with the requests made to the YouTube API.
 * # youtube
 * Factory in the meetTheTurtleApp.
 */
angular.module('meetTheTurtleApp')
  .factory('youtube', function ($http) {

    // Config variables
    var base_url = 'https://gdata.youtube.com/feeds/api/videos',
        format = 'json',
        limit = 1,
        category = 'Music';

    var youtube =  {

      // API call to get the top tracks
      getLink: function(name,artist) {

        var promise = $http.get(base_url,{
          params: {
            'Category': category,
            'limit': limit,
            'alt': format,
            'q': name + ' ' + artist
          }
        }).then(function (response) {
          return response.data;
        });

        return promise;
      }

    };

    return youtube;

  });
