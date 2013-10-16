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
        errors: "=",
        errorMessages: "=",
      },
      controller: function($scope) {
        $scope.errorMessageFor = function(errorKey) {
          if (this.errorMessages) {
            return this.errorMessages[errorKey];
          }
        }
      },
      templateUrl: "templates/errors.html"
    };
  });
