'use strict';

require('./spec-helper.js');
require('../app/services.js');

describe('service', function() {
  beforeEach(angular.mock.module('myApp.services'));


  describe('version', function() {
    it('should return current version', angular.mock.inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
