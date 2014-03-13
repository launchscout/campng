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

  describe("Ingredient", function() {
    var returnedIngredients;
    beforeEach(inject(function($httpBackend, Ingredient, $rootScope) {
      $httpBackend.expectGET("/app/ingredients.json").respond([{id: 1, name: "Broccoli"}]);
      Ingredient.all().success(function(ingredients) {
        returnedIngredients = ingredients;
      });
      $rootScope.$apply();
      $httpBackend.flush();
    }));
    it("gets ingredients", function() {
      expect(returnedIngredients[0].name).toEqual("Broccoli");
    });

  });
});
