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

    $scope.results = [];

    $scope.search = function() {
        if($scope.query) {
          $scope.results = track.searchTrack($scope.query,6);
        }
        else
          $scope.results = [];
    };
  });


