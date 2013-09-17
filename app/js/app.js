// Declare app level module which depends on filters, and services
angular.module('cookbook', ["ngRoute", "ui.bootstrap"]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/recipes/:recipeId/edit', {templateUrl: 'templates/editRecipe.html', controller: "EditRecipeCtrl"}).
      when('/recipes/:recipeId', {templateUrl: 'templates/recipe.html', controller: "RecipeShowCtrl"});
  }]);