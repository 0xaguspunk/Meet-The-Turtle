'use strict';

describe('Controller: ListplaylistCtrl', function () {

  // load the controller's module
  beforeEach(module('meetTheTurtleApp'));

  var ListplaylistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListplaylistCtrl = $controller('ListplaylistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
