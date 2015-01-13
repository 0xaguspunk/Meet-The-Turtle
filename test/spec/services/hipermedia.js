'use strict';

describe('Service: hipermedia', function () {

  // load the service's module
  beforeEach(module('meetTheTurtleApp'));

  // instantiate service
  var hipermedia;
  beforeEach(inject(function (_hipermedia_) {
    hipermedia = _hipermedia_;
  }));

  it('should do something', function () {
    expect(!!hipermedia).toBe(true);
  });

});
