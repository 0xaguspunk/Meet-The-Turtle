'use strict';

describe('Service: soundcloud', function () {

  // load the service's module
  beforeEach(module('meetTheTurtleApp'));

  // instantiate service
  var soundcloud;
  beforeEach(inject(function (_soundcloud_) {
    soundcloud = _soundcloud_;
  }));

  it('should do something', function () {
    expect(!!soundcloud).toBe(true);
  });

});
