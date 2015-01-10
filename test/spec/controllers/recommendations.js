'use strict';

describe('Controller: RecommendationsCtrl', function () {

  // load the controller's module
  beforeEach(module('meetTheTurtleApp'));

  var RecommendationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecommendationsCtrl = $controller('RecommendationsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
