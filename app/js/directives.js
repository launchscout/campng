/* Directives */

angular.module("cookbook").
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);


angular.module("cookbook").
  directive('errors', function(ErrorMessages) {
    return {
      restrict: "A",
      scope: {
        errors: "=",
      },
      controller: function($scope) {
        $scope.errorFor = function(errKey) { return ErrorMessages.error(errKey);}
      },
      template: "<span class='inline-help text-error' ng-repeat='(errorKey, isError) in errors' ng-show='isError'>{{errorMessages[errorKey]}}</span>"
    };
  });
