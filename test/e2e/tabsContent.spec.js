'use strict';

var locators = utils.locators;

describe('test tabs', function () {

    beforeEach(function () {
        browser.get('/');
    });


    it('content changes with tab click', function () {
        expect(locators.main.getText()).toBe('App section all');
        locators.tabs.get(1).click();
        expect(locators.main.getText()).toBe('App section recent');
        locators.tabs.get(2).click();
        expect(locators.main.getText()).toBe('App section archived');

    })

});