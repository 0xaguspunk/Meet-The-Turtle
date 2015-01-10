'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.recommendations
 * @description
 * # recommendations
 * Factory in the meetTheTurtleApp.
 */
angular.module('meetTheTurtleApp')
  .factory('recommendations', function (track, econest) {

    var getRecommendations = econest.getRecommendations;

    var recommendations = {

      artists: [],

      getRecommendations: function(artist) {

        var index = artist.indexOf(this.artists),
            recommendations = [];

        if(index > -1)
          this.artists.splice(index,1);

        this.artists.unshift(artist);

        recommendations = getRecommendations(artist);


      }

    };

    return recommendations;

  });
