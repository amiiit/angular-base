var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        'e2e/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:9000/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './screenshots',
            takeScreenShotsOnlyForFailedSpecs: true
        }));
        utils = require('./e2e/testUtils');
        utils.load();
    }
};
