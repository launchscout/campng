/* Controllers */

angular.module("cookbook").controller("RecipesCtrl", function ($scope, Recipe) {
  $scope.recipes = Recipe.recipes;
});

angular.module("cookbook").controller("RecipeShowCtrl", function ($scope, Recipe, $routeParams, $http, Ingredient) {
  $scope.recipe = Recipe.find($routeParams.recipeId);
  $scope.ingredients = []
  $scope.selectedIngredient = {};
  $scope.addIngredient = function(ingredient) {
    if (!$scope.recipe.ingredients) { $scope.recipe.ingredients = [] }
    $scope.recipe.ingredients.push(ingredient);
  };
  Ingredient.all().success(function(ingredients) {
    $scope.ingredients = ingredients;
  });
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

angular.module("cookbook").controller("NewRecipeCtrl", function ($scope, Recipe, $routeParams, $location) {
  $scope.recipe = Recipe.create();
  $scope.errorMessages = {
    required: "You need this"
  };

  $scope.saveRecipe = function() {
    if (this.recipeForm.$valid) {
      Recipe.recipes.push(this.recipe);
      $location.path("/recipes/" + this.recipe.id);
    }
  }
});
