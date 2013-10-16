/* Controllers */

angular.module("cookbook").controller("RecipesCtrl", function ($scope, Recipe) {
  $scope.recipes = Recipe.recipes;
});

angular.module("cookbook").controller("RecipeShowCtrl", function ($scope, Recipe, $http, $routeParams) {
  $scope.recipe = Recipe.find($routeParams.recipeId);
  $scope.selectedIngredient = {};
  $http.get('/app/ingredients.json').success(function(data) {
    $scope.ingredients = data;
  });
  $scope.addIngredient = function() {
    this.recipe.ingredients.push(this.selectedIngredient);
    this.selectedIngredient = {};
  }

});

angular.module("cookbook").controller("EditRecipeCtrl", function ($scope, Recipe, $routeParams, $location) {
  $scope.recipe = Recipe.find($routeParams.recipeId);

  $scope.errorMessages = {
    required: "You need this"
  };

  $scope.saveRecipe = function() {
    if (this.recipeForm.$valid) {
      $location.path("/recipes/" + this.recipe.id);
    }
  }
});
