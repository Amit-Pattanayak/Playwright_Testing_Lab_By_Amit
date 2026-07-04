import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

// Navigate to URL
Given('I navigate to {string}', async ({ page }, url) => {
  await page.goto(url);
});

// Click login link
When('I click on the Login link', async ({ page }) => {
  await page.locator('a.ico-login').click();
});

// Enter email
When('I enter valid Email Address {string}', async ({ page }, EmailAddress) => {
  await page.locator('input[name="Email"]').fill(EmailAddress);
});

// Enter password
When('I enter valid Password {string}', async ({ page }, Password) => {
  await page.locator('input[name="Password"]').fill(Password);
});

// Click login button
When('I click on the login button', async ({ page }) => {
  await page.locator('input.login-button').click();

});

Then('I should see the homepage {string}', async ({ page }, expectedUrl) => {
  await expect(page).toHaveURL(new RegExp(expectedUrl));
});


