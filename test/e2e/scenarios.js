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
      browser().navigateTo('#recipes/2');
    });
    it('should display title and description', function() {
      expect(element('#recipe_view dd').text()).
        toMatch(/Good/);
    });

  });

  describe("Editing a recipe", function() {
    beforeEach(function() {
      browser().navigateTo('#recipes/2/edit');
    });
    it('should have text field for title', function() {
      expect(element('#recipe_edit_view input[name=title]').val()).
        toMatch(/Pancakes/);
    });

    describe("Changing the title", function() {
      beforeEach(function() {
        input("recipe.title").enter("Casserole");
        element("input[type=submit]").click();
      });
      it("should have changed the title", function() {
        expect(element('#recipe_view dt').text()).
          toMatch(/Casserole/);
        });
    });
  });

});
