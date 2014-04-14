require("protractor/jasminewd");
require('jasmine-given');

var EditPage = require("./pages/edit_page");
var ShowPage = require("./pages/show_page");
var BasePage = require("./pages/base_page");

describe("app", function() {
    var editPage = new EditPage();
    var showPage = new ShowPage();
    var page = new BasePage();

    describe("editing a recipe", function() {
	Given(function() { editPage.visitPage(); });
        And(function() { editPage.clickEdit(); });
        And(function() { editPage.fillTitle("Awesome Pancakes"); });
        When(function() {  editPage.submit(); });
	Then(function() { expect(page.currentUrl()).toEqual("http://localhost:8000/app/index.html#/recipes/2"); });
        And(function() { expect(showPage.getRecipeTitle()).toEqual("Awesome Pancakes"); });
    });
});
