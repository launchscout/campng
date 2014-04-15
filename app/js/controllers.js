/* Controllers */

angular.module("cookbook").controller("RecipesCtrl", function ($scope, Recipe) {
  $scope.recipes = Recipe.recipes;
});

angular.module("cookbook").controller("RecipeShowCtrl", function ($scope, Recipe, $routeParams) {
  $scope.recipe = Recipe.find($routeParams.recipeId);
});

angular.module("cookbook").controller("EditRecipeCtrl", function ($scope, Recipe, $routeParams, $location) {
  $scope.recipe = angular.copy(Recipe.find($routeParams.recipeId));

  $scope.saveRecipe = function() {
    angular.copy(this.recipe, Recipe.find(this.recipe.id));
    $location.path("/recipes/" + this.recipe.id);
  }
});
