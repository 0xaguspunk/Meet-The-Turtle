'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.recommendations
 * @description Handles everything related to recommendations.
 * # recommendations
 * Factory in the meetTheTurtleApp.
 */
angular.module('meetTheTurtleApp')
  .factory('recommendations', function (track, formatTrack, econest) {

    // Config
    var getRecommendations = econest.getRecommendations,
        formatRecommentadtions = formatTrack.ecoToArtists;

    var limit = 6;

    var recommendations = {

      artists: [],

      recommendations: [],

      // Gets recommendation based on artists
      getRecommendations: function(artist) {

        var index = artist.indexOf(this.artists);

        if(index > -1)
          this.artists.splice(index,1);

        this.artists.unshift(artist);

        getRecommendations(this.artists.slice(0,5))
          .then(function(data) {
            track.searchTracksFromArtists(formatRecommentadtions(data), limit);
          });

        this.recommendations = track.searchedTracksFromArtists;

        return this.recommendations;
      }

    };

    return recommendations;

  });
