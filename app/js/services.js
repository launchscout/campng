/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module("cookbook").
  value('version', '0.1');

angular.module("cookbook").factory("Recipe", function() {
  return {
    recipes: [
      {id: 1, title: "Waffles", description: "Yummy"},
      {id: 2, title: "Pancakes", description: "Good"}
    ],
    find: function(id) {
      return _.findWhere(this.recipes, {id: Number(id)});
    },
    create: function() {
      return {
        id: _.max(_.pluck(this.recipes, "id")) + 1,
        title: "",
        description: ""
      };
    }

  }
});

angular.module("cookbook").factory("Ingredient", function($http) {
  return {
    all: function() {
      return $http.get("/app/ingredients.json");
    }
  }
});
