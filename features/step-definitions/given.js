const { Given } = require('@cucumber/cucumber');
const signin = require('../pageobjects/Signin');

Given(/^I am on the login page$/, () => {
    signin.open()
    browser.maximizeWindow();
    
});
