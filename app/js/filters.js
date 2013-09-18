/* Filters */

angular.module("cookbook").
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);

angular.module("cookbook").
  filter('markdown', function() {
    return function(text) {
      return markdown.toHTML(text);
    }
  });
