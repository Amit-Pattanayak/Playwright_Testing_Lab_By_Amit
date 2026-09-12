
import { expect} from '@playwright/test';

export class DemoShop{
    constructor(page){
        this.page=page;
        this.LoginTab=page.locator('//a[@class="ico-login"]');
        this.EnterEmail=page.locator('#Email');
        this.EnterPassword=page.locator('#Password');
        this.ClickButton=page.locator("//input[@class='button-1 login-button']");



    }
     async navigateToUrl (url){
        await this.page.goto(url);
     }

     async ClickLoginTab(){
        await this.LoginTab.click();
     }

     async VerifyLoginpage(expectedloginpage){
        await expect(this.page).toHaveURL(expectedloginpage);
     }

     async Enteremail(Email){
        await this.EnterEmail.fill(Email);
     }

     async Enterpassword(Password){
        await this.EnterPassword.fill(Password);
     }
     
     async Clicklogin(){
        await this.ClickButton.click();
     }

     async verifyUserLoggedIntoHomepage(expectedUrl){
    await expect(this.page).toHaveURL(expectedUrl);
  }


}