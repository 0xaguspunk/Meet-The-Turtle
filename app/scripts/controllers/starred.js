'use strict';

/**
 * @ngdoc function
 * @name meetTheTurtleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meetTheTurtleApp
 */
angular.module('meetTheTurtleApp')
  .controller('StarredCtrl', function ($scope) {

    $scope.getMusic = function() {

      SC.initialize({
        client_id: "1ad3dc8b5612920883cf40e2db3692a0",
        redirect_uri: "http://localhost:9000/#/starred",
      });

      SC.get("/groups/55517/tracks", {limit: 10}, function(tracks){
        $scope.tracks = tracks;
      });
    };

    $scope.tracks = [];

  });
