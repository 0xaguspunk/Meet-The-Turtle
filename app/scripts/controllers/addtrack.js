'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:AddlistCtrl
 * @description
 * # AddlistCtrl
 * Controller of the meetTheTurtleApp
 */
angular.module('meetTheTurtleApp')
  .controller('AddTrackCtrl', function ($scope) {

    $scope.addTrack = function($index) {

      console.log($scope.tracks[$index]);
    };
  });
