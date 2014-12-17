'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meetTheTurtleApp
 */
angular.module('meetTheTurtleApp')
  .controller('StarredCtrl', function ($scope, lastfm) {

    var promise = $scope.tracks = lastfm.getHypedTracks()
      .then(function (data) {
        $scope.tracks = data;
      });

  });
