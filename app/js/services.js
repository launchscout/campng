/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module("cookbook").
  value('version', '0.1');

angular.module("cookbook").factory("Recipe", function() {
  return {
    recipes: [
      {id: 1, title: "Waffles", description: "Yummy", ingredients: []},
      {id: 2, title: "Pancakes", description: "Good", ingredients: []}
    ],
    find: function(id) {
      return _.findWhere(this.recipes, {id: Number(id)});
    }
  }
});