var BasePage = (function() {
    function BasePage() {}

    BasePage.prototype.currentUrl = function() {
	return browser.getCurrentUrl();
    };

    return BasePage;
})();

module.exports = BasePage;
