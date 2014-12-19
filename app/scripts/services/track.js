  'use strict';

  /**
   * @ngdoc service
   * @name meetTheTurtleApp.track
   * @description Deals with making the request and formatting the objects returned
   *              by the API at a higher level.
   * # track
   * Factory in the meetTheTurtleApp.
   */
  angular.module('meetTheTurtleApp')
    .factory('track', function (formatTrack, lastfm, spotify, soundcloud) {

      // Configuration
      var topTracks = lastfm.getTopTracks,
          getData = lastfm.getData,
          formatTopTracks = formatTrack.lastfmToTrack;

      var tracks = [];

      var track = {

        // Calls the API specified in topTracks and changes the format
        // of the response to the specified in formatTopTracks
        getTopTracks: function(limit) {

          topTracks(limit).then(function () {
            tracks = formatTopTracks(getData());
          });

          return tracks;
        }

      };

      return track;

    });
