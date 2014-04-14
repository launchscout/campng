var ShowPage = (function() {
    function ShowPage() {
	this.recipeTitle = element(By.css('title'));
    }

    ShowPage.prototype.getRecipeTitle = function() {
	return this.recipeTitle.getText();
    };

    return ShowPage;
})();

module.exports = ShowPage;
