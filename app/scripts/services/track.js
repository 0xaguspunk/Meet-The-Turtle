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
    .factory('track', function (formatTrack, lastfm, spotify, youtube) {

      // Configuration
      var getTopTracks = lastfm.getTopTracks,
          formatTopTracks = formatTrack.lastfmToTrack;

      var searchTrack = spotify.getSearchResult,
          formatSearchTracks = formatTrack.spotifyToTrack;

      var getLink = youtube.getLink,
          formatLink = formatTrack.youtubeToLink;

      var track = {

        topTracks: [],
        searchedTracks: [],
        searchedTracksFromArtists: [],
        requestedLink: '',

        // Calls the API specified in topTracks and changes the format
        // of the response to the specified in formatTopTracks
        getTopTracks: function(limit) {

          getTopTracks(limit).then(function (data) {
            track.topTracks = formatTopTracks(data);
          });

          return this.topTracks;
        },

        // Calls the API specified in searchTrack and changes the format
        // of the response to the specified in formatSearchTracks
        searchTrack: function(query, limit) {

          searchTrack(query, limit).then(function (data) {
            track.searchedTracks = formatSearchTracks(data);
          });

          return this.searchedTracks;
        },

        // Calls the API specified in searchTrack and changes the format
        // of the response to the specified in formatSearchTracks
        searchTracksFromArtists: function(queryArray, limit) {


          searchTrack( queryArray[0], limit/2).then(function (data) {

            var result = formatSearchTracks(data);

            track.searchedTracksFromArtists = [];

            for(var song in result)
              track.searchedTracksFromArtists.push(result[song]);

            searchTrack(queryArray[1],limit/2).then(function(data){

              var result = formatSearchTracks(data);

              for(var song in result)
                track.searchedTracksFromArtists.push(result[song]);

            });
          });

          return this.searchedTracksFromArtists;
        },

        // Calls the API specified in getLink and changes the format
        // of the response to the specified in formatLink
        getLink: function(name,artist) {

          getLink(name,artist).then(function(data){
            track.requestedLink = formatLink(data);
          });

          return this.requestedLink;
        }

      };

      return track;

    });
