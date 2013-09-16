/* Controllers */

angular.module("cookbook").controller("RecipesCtrl", function ($scope) {
  $scope.recipes = [{title: "Pancakes"}, {title: "Waffles"}];
});

angular.module("cookbook").controller("RecipeShowCtrl", function ($scope) {
  $scope.recipe = {title: "Pancackes", description: "Mmm.. delicious"};
});
