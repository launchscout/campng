/* jasmine specs for filters go here */

describe('filters', function() {
  beforeEach(module('cookbook'));


  describe('interpolate', function() {
    beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER');
    }));


    it('should replace VERSION', inject(function(interpolateFilter) {
      expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
    }));
  });

  describe('markdown', function() {

    it('should markdown', inject(function(markdownFilter) {
      expect(markdownFilter('hi *there*')).toEqual('<p>hi <em>there</em></p>');
    }));
  });

});
