const Page = require('./page');
const actions = require('../Util/actions');

class signin extends Page {

    get Username() {return $('#register_email');}
    get Password() {return $('#register_password');} 
    get loginbutton() {return $('#register > div:nth-child(3) > div > div > div > button');} 
    get forgotpswd() {return $('#register > div:nth-child(3) > div > div > div > button'); }
    get signup() {return $('//*[@id="root"]/section/header/div/div/a/button');}

    open() {
        return super.open();
        
    }

    ClickSignUp()
    {
     browser.pause(4000);   
     actions.doClick(this.signup);
     browser.pause(4000);
    }

}


module.exports = new signin();