var EditPage = (function() {
    function EditPage() {
	this.editLink = element(By.linkText('Edit'));
	this.titleField = element(By.input('recipe.title'));
	this.saveButton = element(By.css('.btn.primary'));
    }

    EditPage.prototype.visitPage = function() {
	browser.get("/app/index.html#/recipes/2");
    };

    EditPage.prototype.clickEdit = function() {
	this.editLink.click();
    };

    EditPage.prototype.fillTitle = function(title) {
	this.titleField.sendKeys(title);
    };

    EditPage.prototype.submit = function() {
	this.saveButton.click();
    };

    return EditPage;

})();

module.exports = EditPage;
