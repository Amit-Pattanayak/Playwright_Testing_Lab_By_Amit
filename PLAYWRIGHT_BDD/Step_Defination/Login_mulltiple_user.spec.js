
// Positive scenario
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { url } from 'node:inspector';

const { Given, When, Then } = createBdd();

// Step: Given I navigate to "https://www.saucedemo.com/"
Given('I navigate to {string}', async ({ page }, url) => {
 await page.goto(url, { timeout: 60000, waitUntil: 'domcontentloaded' }); // 60 seconds
  
});

// Enter user name
When('I enter username {string}', async ({page}, username) => {
 await page.getByPlaceholder('Username').fill(username);
});
// Enter Password
When('I enter password {string}', async ({page}, password) => {
  await page.getByPlaceholder("Password").fill(password);
});

When('I click on the login button', async ({page}) => {
await page.locator('#login-button').click();
});

// Verify redirection to homepage
Then('I should be redirected to the homepage {string}', async ({ page }, expectedUrl) => {
  await expect(page).toHaveURL(expectedUrl);
});
