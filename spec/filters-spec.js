'use strict';

require('./spec-helper.js');
require('../app/filters.js');

describe('filter', function() {
  beforeEach(angular.mock.module('myApp.filters'));


  describe('interpolate', function() {
    beforeEach(angular.mock.module(function($provide) {
      $provide.value('version', 'TEST_VER');
    }));


    it('should replace VERSION', angular.mock.inject(function(interpolateFilter) {
      expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
    }));
  });
});
