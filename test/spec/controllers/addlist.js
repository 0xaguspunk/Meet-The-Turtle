'use strict';

describe('Controller: AddlistCtrl', function () {

  // load the controller's module
  beforeEach(module('meetTheTurtleApp'));

  var AddlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddlistCtrl = $controller('AddlistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
