import { createBdd } from 'playwright-bdd';
import {test} from '../Fixtures/Demo_shop'

const {Given, When,Then}= createBdd(test);

Given('I navigate to {string}', async ({demo_loginPage}, url) => {
  await demo_loginPage.navigateToUrl (url);
});

When('I Click on Login tab', async ({demo_loginPage}) => {
  await demo_loginPage.ClickLoginTab();
});

When('Verify login page should open {string}', async ({demo_loginPage},expectedloginpage) => {
  await demo_loginPage.VerifyLoginpage(expectedloginpage);
});

When('I Enter email address {string}', async ({demo_loginPage}, Email) => {
  await demo_loginPage.Enteremail(Email);
});

When('I Enter Password {string}', async ({demo_loginPage}, Password) => {
  await demo_loginPage.Enterpassword(Password)
});

When('I click on Login button', async ({demo_loginPage}) => {
  await demo_loginPage.Clicklogin();
});

Then('Verify user is on HomePage {string}', async ({demo_loginPage},expectedUrl) => {
  await demo_loginPage.verifyUserLoggedIntoHomepage(expectedUrl);
});
