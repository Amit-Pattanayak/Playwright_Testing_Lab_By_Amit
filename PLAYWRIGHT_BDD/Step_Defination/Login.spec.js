import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('I navigate to {string}', async ({ page }, url) => {
  // Step: Given I navigate to "https://demoblaze.com/index.html" 
  await page.goto(url);
});

When('I click on the login link', async ({page}) => {
  // Step: When I click on the login link
  await page.locator('#login2').click();
});

When('I enter username {string}', async ({page}, username) => {
  // Step: And I enter username "Amitpattanayak@gmail.com"
     await page.locator('#loginusername').fill(username);
});

When('I enter password {string}', async ({page}, password) => {
  // Step: And I enter password "Amit@2648"
   await page.locator('#loginpassword').fill(password);
});

When('I click on the login button', async ({page}) => {
  // Step: And I click on the login button
  await page.locator('button[onclick="logIn()"]').click();
});

Then('I should be redirected to the homepage {string}', async ({page}, expectedUrl) => {
  // Step: Then I should be redirected to the homepage "https://demoblaze.com/index.html"
   await expect(page).toHaveURL(expectedUrl);
});
