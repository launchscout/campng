var ShowPage = (function() {
    function ShowPage() {
	this.editLink = element(By.linkText('Edit'));
	this.recipeTitle = element(By.css('title'));
    }
    
    ShowPage.prototype.visitPage = function() {
	browser.get("/app/index.html#/recipes/2");
    };

    ShowPage.prototype.clickEdit = function() {
	this.editLink.click();
    };

    ShowPage.prototype.getRecipeTitle = function() {
	return this.recipeTitle.getText();
    };

    return ShowPage;
})();

module.exports = ShowPage;
