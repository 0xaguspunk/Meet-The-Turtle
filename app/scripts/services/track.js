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
      var getTopTracks = lastfm.getTopTracks,
          getData = lastfm.getData,
          formatTopTracks = formatTrack.lastfmToTrack;

      var searchTrack = spotify.getSearchResult,
          getSearchData = spotify.getData,
          formatSearchTracks = formatTrack.spotifyToTrack;

      var searchedTracks = [],
          topTracks;

      var track = {

        // Calls the API specified in topTracks and changes the format
        // of the response to the specified in formatTopTracks
        getTopTracks: function(limit) {

          getTopTracks(limit).then(function () {
            topTracks = formatTopTracks(getData());
          });

          return topTracks;
        },

        // Calls the API specified in searchTrack and changes the format
        // of the response to the specified in formatSearchTracks
        searchTrack: function(query, limit) {

          searchTrack(query,limit).then(function () {
            searchedTracks = formatSearchTracks(getSearchData());
          });

          return searchedTracks;
        }

      };

      return track;

    });
