// /* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('cookbook'));

  describe('version', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });

  describe("Recipe", function() {
    beforeEach(inject(function(Recipe) {
      Recipe.recipes = [
        {id: 1, title: "Waffles", description: "Yummy"},
        {id: 2, title: "Pancakes", description: "Good"}
      ];
    }));
    it("should find by id", inject(function(Recipe) {
      expect(Recipe.find(1).title).toEqual("Waffles");
    }));
  });
});
