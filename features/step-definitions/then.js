const { Then } = require('@cucumber/cucumber');
const ActivateAccount = require('../pageobjects/ActivateAccount');

Then(/^I should see Activate account page$/, () => {
    ActivateAccount.ValidateActivatePage();
});