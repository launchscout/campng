/* Controllers */

angular.module("cookbook").controller("RecipesCtrl", function ($scope) {
  $scope.recipes = [{title: "Pancakes"}, {title: "Waffles"}];
});
