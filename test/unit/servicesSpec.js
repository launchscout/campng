// /* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('cookbook'));

  describe('version', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });

  describe("Recipe", function() {
    it("should find by id", inject(function(Recipe) {
      expect(Recipe.find("1").title).toEqual("Waffles");
    }));
    it("creates a new one", inject(function(Recipe) {
      expect(Recipe.create().id).toEqual(3);
    }));
  });
});
