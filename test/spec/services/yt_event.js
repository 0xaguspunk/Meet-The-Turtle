'use strict';

describe('Service: YTEvent', function () {

  // load the service's module
  beforeEach(module('meetTheTurtleApp'));

  // instantiate service
  var YTEvent;
  beforeEach(inject(function (_YTEvent_) {
    YTEvent = _YTEvent_;
  }));

  it('should do something', function () {
    expect(!!YTEvent).toBe(true);
  });

});
