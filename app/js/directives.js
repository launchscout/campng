/* Directives */

angular.module("cookbook").
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

angular.module("cookbook").directive("markdownPreview", function($sce){
    return {
    	restrict: "EA",
    	template: "<div ng-bind-html='value'></div>",
    	replace: true,
    	scope: {
  	    text: "=",
    	},
    	link: function(scope, element, attrs) {
  	    scope.$watch("text", function() {
      		scope.value = markdown.toHTML(scope.text);
  	    })
    	}
    };
});
