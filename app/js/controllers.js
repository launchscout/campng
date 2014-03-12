/* Controllers */

angular.module("cookbook").controller("RecipesCtrl", function ($scope, Recipe) {
  $scope.recipes = Recipe.recipes;
});

angular.module("cookbook").controller("RecipeShowCtrl", function ($scope, Recipe, $routeParams, $http) {
  $scope.recipe = Recipe.find($routeParams.recipeId);
  $http.get("/app/ingredients.json").then(function(response) {
    $scope.ingredients = response.data;
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
