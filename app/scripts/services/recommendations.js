'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.recommendations
 * @description
 * # recommendations
 * Factory in the meetTheTurtleApp.
 */
angular.module('meetTheTurtleApp')
  .factory('recommendations', function (track, formatTrack, econest) {

    var getRecommendations = econest.getRecommendations,
        formatRecommentadtions = formatTrack.ecoToArtists;

    var limit = 6;

    var recommendations = {

      artists: [],

      recommendations: [],

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
