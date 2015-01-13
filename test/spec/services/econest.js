'use strict';

describe('Service: econest', function () {

  // load the service's module
  beforeEach(module('meetTheTurtleApp'));

  // instantiate service
  var econest;
  beforeEach(inject(function (_econest_) {
    econest = _econest_;
  }));

  it('should do something', function () {
    expect(!!econest).toBe(true);
  });

});
