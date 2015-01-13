'use strict';

describe('Service: playerLogic', function () {

  // load the service's module
  beforeEach(module('meetTheTurtleApp'));

  // instantiate service
  var playerLogic;
  beforeEach(inject(function (_playerLogic_) {
    playerLogic = _playerLogic_;
  }));

  it('should do something', function () {
    expect(!!playerLogic).toBe(true);
  });

});
