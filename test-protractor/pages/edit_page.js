var EditPage = (function() {
    function EditPage() {
	this.titleField = element(By.input('recipe.title'));
	this.saveButton = element(By.css('.btn.primary'));
    }

    EditPage.prototype.fillTitle = function(title) {
	this.titleField.sendKeys(title);
    };

    EditPage.prototype.submit = function() {
	this.saveButton.click();
    };

    return EditPage;

})();

module.exports = EditPage;
