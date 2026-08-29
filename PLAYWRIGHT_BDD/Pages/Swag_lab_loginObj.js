
import { expect } from '@playwright/test';

export class SwagLoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginButton = page.locator('#login-button');
  }

  async navigateTourl(url) {
    await this.page.goto(url);
  }

  async enterUsername(username) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }
  async verifyUserLoggedIntoHomepage(expectedUrl){
    await expect(this.page).toHaveURL(expectedUrl);
  }
}

//module.exports = { SwagLoginPage };
