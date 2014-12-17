'use strict';

describe('Service: lastfm', function () {

  // load the service's module
  beforeEach(module('meetTheTurtleApp'));

  // instantiate service
  var lastfm;
  beforeEach(inject(function (_lastfm_) {
    lastfm = _lastfm_;
  }));

  it('should do something', function () {
    expect(!!lastfm).toBe(true);
  });

});
