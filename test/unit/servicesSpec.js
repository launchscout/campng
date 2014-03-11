// /* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('cookbook'));

  describe('version', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });

  describe("Recipe", function() {
    it("should have recipes", inject(function(Recipe) {
      expect(Recipe.recipes.length).toEqual(2);
    }));
    it("should find by id", inject(function(Recipe) {
      expect(Recipe.find("1").title).toEqual("Waffles");
    }));
  });
});
