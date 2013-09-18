/* jasmine specs for controllers go here */

describe("RecipesCtrl", function() {

  beforeEach(function() {
    module("cookbook");
  });

  beforeEach(inject(function($controller) {
    this.scope = {};
    $controller('RecipesCtrl', {
      $scope: this.scope
    });
  }));

  describe("adding Recipes to the scope", function() {
    it("should add recipes", function() {
      expect(this.scope.recipes.length).toEqual(3);
      expect(this.scope.recipes[0].title).toEqual("Waffles");
      expect(this.scope.recipes[1].title).toEqual("Pancakes");
    });
  });

});
