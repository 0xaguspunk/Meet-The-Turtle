'use strict';

describe('Controller: PlaytrackCtrl', function () {

  // load the controller's module
  beforeEach(module('meetTheTurtleApp'));

  var PlaytrackCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlaytrackCtrl = $controller('PlaytrackCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
