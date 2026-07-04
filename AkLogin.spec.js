import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

// Navigate to Sauce Demo
Given('I navigate to {string}', async ({ page }, url) => {
  await page.goto(url, { timeout: 60000, waitUntil: 'domcontentloaded' }); // 60 seconds
});


// Enter valid username
When('I enter valid Username {string}', async ({ page }, username) => {
  await page.getByPlaceholder('Username').fill(username);
});

// Enter valid password
When('I enter valid Password {string}', async ({ page }, password) => {
  await page.getByPlaceholder('Password').fill(password);
});

// Click login button
When('I click on the login button', async ({ page }) => {
  await page.getByRole('button', { name: 'Login' }).click();
});

// Verify redirection to homepage
Then('I should be redirected to the homepage {string}', async ({ page }, expectedUrl) => {
  await expect(page).toHaveURL(expectedUrl);
});
