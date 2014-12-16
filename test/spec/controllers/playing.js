'use strict';

describe('Controller: PlayingctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('meetTheTurtleApp'));

  var PlayingctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayingctrlCtrl = $controller('PlayingctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
