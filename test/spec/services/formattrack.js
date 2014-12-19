'use strict';

describe('Service: formatTrack', function () {

  // load the service's module
  beforeEach(module('meetTheTurtleApp'));

  // instantiate service
  var formatTrack;
  beforeEach(inject(function (_formatTrack_) {
    formatTrack = _formatTrack_;
  }));

  it('should do something', function () {
    expect(!!formatTrack).toBe(true);
  });

});
