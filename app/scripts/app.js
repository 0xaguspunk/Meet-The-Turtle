'use strict';

/**
 * @ngdoc overview
 * @name meetTheTurtleApp
 * @description
 * # meetTheTurtleApp
 *
 * Main module of the application.
 */
angular
  .module('meetTheTurtleApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/starred'
      })
      .when('/starred', {
        templateUrl: 'views/starred.html',
        controller: 'StarredCtrl'
      })
      .when('/player', {
        templateUrl: 'views/player.html',
        controller: 'PlayerCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/starred'
      });
  });
