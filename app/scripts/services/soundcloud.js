'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.soundcloud
 * @description
 * # soundcloud
 * Factory in the meetTheTurtleApp.
 */
angular.module('meetTheTurtleApp')
  .factory('soundcloud', function ($http) {

    var client_id = '1ad3dc8b5612920883cf40e2db3692a0',
        redirect_uri = 'http://localhost:9000/#/starred';

    var soundcloud = {

    };

    return soundcloud;
  });
