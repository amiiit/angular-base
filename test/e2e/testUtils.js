'use strict';

var locators = {
    body: $('body'),
    tabs: $$('paper-tab'),
    main: $('#main')
};

var TestUtils = {
    load: function () {
        browser.get('/')
    },
    locators: locators,
    appConfig: require('../../config.json')

};

module.exports = TestUtils;
