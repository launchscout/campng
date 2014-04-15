/* Directives */

angular.module("cookbook").
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

angular.module("cookbook").directive("markdownPreview", function(){
    return {
    	template: "<div ng-bind-html='text | markdown'></div>",
    	replace: true,
    	scope: {
  	    text: "="
    	}
    };
});
