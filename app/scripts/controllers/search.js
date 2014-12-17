'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:SearchlCtrl
 * @description
 * # SearchCtrl
 * Controller of the meetTheTurtleApp
 */

angular.module('meetTheTurtleApp')
  .controller('SearchCtrl', function ($scope, spotify) {

    $scope.results = [];

    $scope.search = function() {
        if($scope.query) {
          var promise = spotify.getQueryResult($scope.query)
            .then(function (data) {
              $scope.results = data;
            });
        }
        else
          $scope.results = [];
    };
  });


