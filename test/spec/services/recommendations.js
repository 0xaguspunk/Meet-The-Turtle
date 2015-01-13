'use strict';

describe('Service: recommendations', function () {

  // load the service's module
  beforeEach(module('meetTheTurtleApp'));

  // instantiate service
  var recommendations;
  beforeEach(inject(function (_recommendations_) {
    recommendations = _recommendations_;
  }));

  it('should do something', function () {
    expect(!!recommendations).toBe(true);
  });

});
