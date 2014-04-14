exports.config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    seleniumPort: null,
    seleniumArgs: [],
    specs: [
	'../test-protractor/**/*spec.{js,coffee}'
    ],
    capabilities: {
	'browserName': 'chrome'
    },
    baseUrl: 'http://localhost:8000',
    jasmineNodeOpts: {
	onComplete: null,
	isVerbose: false,
	showColors: true,
	includeStackTrace: false
    }
};
