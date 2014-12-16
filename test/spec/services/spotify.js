'use strict';

describe('Service: spotify', function () {

  // load the service's module
  beforeEach(module('meetTheTurtleApp'));

  // instantiate service
  var spotify;
  beforeEach(inject(function (_spotify_) {
    spotify = _spotify_;
  }));

  it('should do something', function () {
    expect(!!spotify).toBe(true);
  });

});
