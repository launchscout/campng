/* Controllers */

angular.module("cookbook").controller("RecipesCtrl", function ($scope) {
  $scope.recipes = [{title: "Pancakes"}, {title: "Waffles"}];
});

angular.module("cookbook").controller("RecipeShowCtrl", function ($scope, Recipe, $routeParams) {
  $scope.recipe = Recipe.find($routeParams.recipeId);
});
