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

    describe("filtering", function() {
      it("should filter recipes by search term", function() {
        input("search").enter("Pan");
        expect(repeater("#recipe_list_view li").count()).toEqual(1);
      });
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

    describe("with markdown in the description", function() {
      beforeEach(function() {
        browser().navigateTo('#recipes/3');
      });
      it("should render the markdown", function() {
        expect(element('#recipe_view dd p em').text()).toMatch(/emphasized/)
      });
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

    describe("changing title to something invalid", function() {
      beforeEach(function() {
        input("recipe.title").enter("");
      });
      it("displays an error", function() {
        expect(element(".text-error").text()).toMatch(/You need this/);
      });
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
