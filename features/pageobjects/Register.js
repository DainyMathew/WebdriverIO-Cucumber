const actions = require("../Util/actions");

class Register {

    get email()   {return $('#register_email'); }
    get username() {return $('#register_username');}
    get password() {return $('#register_password'); } 
    get confirmpswd(){return $('#register_confirm');}
    get checkbox(){return $('//*[@id="register_agreement"]');}
    get registerbutton(){return $('/html/body/div/section/main/div/form/div[6]/div/div/div/button');}
    get login(){return $('#register > div.ant-row.ant-row-no-wrap.signUp__action-row > div > a > span');}
    get signup(){return $('#root > section > header > div > div > a > button > div');}

    EnterEmail(Email)
   {
    //  actions.doSetValue(this.email)
    this.email.setValue(Email);
   }
   EnterUsername(Username)
   {
    // actions.doSetValue(this.username)
    this.username.setValue(Username);
   }
   EnterPassword(Password)
   {
    
    this.password.setValue(Password);
   }

   EnterConfirmPassword(Confirm_Password)
   {
    
    this.confirmpswd.setValue(Confirm_Password);
   }

   ReadAgreement()
   {
       this.checkbox.click();
       browser.pause(2000);
   }
   ClickRegister()
   {
      this.registerbutton.click(); 
      browser.pause(4000);
   }


   

}


module.exports = new  Register(); 