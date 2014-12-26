'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:SearchlCtrl
 * @description
 * # SearchCtrl
 * Controller of the meetTheTurtleApp
 */

angular.module('meetTheTurtleApp')
  .controller('SearchCtrl', function ($scope, track) {

    var config = {
      'limit': 6
    };

    $scope.results = [];

    $scope.search = function() {
        if($scope.query) {
          $scope.results = track.searchTrack($scope.query,config.limit);
        }
        else
          $scope.results = [];
    };

  });


