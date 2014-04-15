'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  beforeEach(module('cookbook'));

  describe('app-version', function() {
    it('should print current version', function() {
      module(function($provide) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function($compile, $rootScope) {
        var element = $compile('<span app-version></span>')($rootScope);
        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });

  describe('markdownPreview previews markdown', function() {
    beforeEach(inject(function($rootScope) {
      $rootScope.text = "*hi* there";
    }));
    it('should preview markdown', function() {
      inject(function($compile, $rootScope) {
        var element = $compile('<div markdown-preview text="text"></div>')($rootScope);
        $rootScope.$apply();
        expect(element.find("em").html()).toEqual('hi');
      });
    });
  });

});
