/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('cookbook', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });

  describe('Listing Recipes', function() {

    it('should display recipes', function() {
      expect(element('#recipe_list_view li').text()).
        toMatch(/Pancakes/);
    });

  });

  describe("Viewing a recipe", function() {
    beforeEach(function() {
      browser().navigateTo('#recipes/1');
    });
    it('should display title and description', function() {
      expect(element('#recipe_view dd').text()).
        toMatch(/Mmm.. delicious/);
    });

  });

});
