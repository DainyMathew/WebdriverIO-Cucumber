const { When } = require('@cucumber/cucumber');
const signin = require('../pageobjects/Signin');
const Register = require('../pageobjects/Register');

When('I  click on Sign Up button', () => {
      signin.ClickSignUp();
});

When(/^I enter the ([a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+) and (\w+)$/,(Email,Username)  => {
    
    Register.EnterEmail(Email);
    Register.EnterUsername(Username);
});

When(/^I enter the ([a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+) and ([a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+)$/,(Password,Confirm_Password)  => {
    
    Register.EnterPassword(Password);
    Register.EnterConfirmPassword(Confirm_Password);
});

When('I select the checkbox', () => {
    Register.ReadAgreement();
});

When('I Click on Register button', () => {
    Register.ClickRegister();
    browser.pause(4000);
});

