// Declare app level module which depends on filters, and services
angular.module('cookbook', ["ngRoute"]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/recipes/:recipeId', {templateUrl: 'templates/recipe.html', controller: "RecipeShowCtrl"});
  }]);