'use strict';

describe('Controller: TrackinfoCtrl', function () {

  // load the controller's module
  beforeEach(module('meetTheTurtleApp'));

  var TrackinfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrackinfoCtrl = $controller('TrackinfoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
