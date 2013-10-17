/* Directives */

angular.module("cookbook").
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);


angular.module("cookbook").
  directive('errors', function() {
    return {
      restrict: "A",
      scope: {
        errors: "="
      },
      controller: function($scope) {
        $scope.errorMessageFor = function(errorKey) {
        }
      },
      templateUrl: "templates/errors.html"
    };
  });
