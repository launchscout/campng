/* Controllers */

angular.module("cookbook").controller("RecipesCtrl", function ($scope) {
  $scope.recipes = [{id: 1, title: "Pancakes"}, {id: 2, title: "Waffles"}];
});

angular.module("cookbook").controller("RecipeShowCtrl", function ($scope) {
  $scope.recipe = {title: "Pancackes", description: "Mmm.. delicious"};
});
