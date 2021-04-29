class ActivateAccount{
    get PIN() {return $('register_pin');}
    get ActivateAccount() {return $('//*[@id="register"]/div[3]/div/div/div/button');}
    get login() {return $('//*[@id="register"]/div[4]/div[2]/a/span');}

 ValidateActivatePage()
 {
    browser.pause(4000);
    this.PIN.isDisplayed();
    console.log("Actiavte account page is displayed");
 }

}

module.exports = new  ActivateAccount(); 