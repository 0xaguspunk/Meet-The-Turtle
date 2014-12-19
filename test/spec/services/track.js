'use strict';

describe('Service: track', function () {

  // load the service's module
  beforeEach(module('meetTheTurtleApp'));

  // instantiate service
  var track;
  beforeEach(inject(function (_track_) {
    track = _track_;
  }));

  it('should do something', function () {
    expect(!!track).toBe(true);
  });

});
