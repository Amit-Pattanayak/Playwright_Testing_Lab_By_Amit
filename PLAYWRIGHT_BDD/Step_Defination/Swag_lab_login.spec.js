
import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/Swag_fixture';

const { Given, When, Then } = createBdd(test);

Given('I navigate to {string}', async ({ swag_lab_loginPage }, url) => {
  await swag_lab_loginPage.navigateTourl(url);
});

When('I enter username {string}', async ({ swag_lab_loginPage }, username) => {
  await swag_lab_loginPage.enterUsername(username);
});

When('I enter password {string}', async ({ swag_lab_loginPage }, password) => {
  await swag_lab_loginPage.enterPassword(password);
});

When('I click on the login button', async ({ swag_lab_loginPage }) => {
  await swag_lab_loginPage.clickLogin();
});

Then('I should be redirected to the homepage {string}', async ({ swag_lab_loginPage }, expectedUrl) => {
  await swag_lab_loginPage.verifyUserLoggedIntoHomepage(expectedUrl);
});
