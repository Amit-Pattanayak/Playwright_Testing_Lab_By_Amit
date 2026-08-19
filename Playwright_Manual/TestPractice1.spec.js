import { test, expect } from '@playwright/test';
import { assert } from 'node:console';

test('Login functionality', async ({ page }) => {

// open the url
await page.goto('https://testautomationpractice.blogspot.com/');

//Enter name
await page.getByPlaceholder('Enter Name').fill("AMIT PATTANAYAK");

//Enter Email address
await page.locator("#email").fill('akpattanayak@gmail.com');
//Enter phone number
await page.getByPlaceholder("Enter Phone").fill('9861523122');

//Enter address
await page.locator("#textarea").fill("At-Nuapada Po-Charisree Dist-Puri Odisha-India");
// Gender
await page.locator("//input[@value='male']").click();

//Chose the Day
await page.locator("//input[@value='sunday']").check();
await page.locator("//input[@value='monday']").check();
await page.locator("//input[@value='wednesday']").check();
await page.locator("//input[@value='monday']").uncheck();
// Verify monday is unchecked
await expect(page.locator("//input[@value='monday']")).not.toBeChecked();
await expect(page.locator("//input[@value='wednesday']")).toBeChecked();

// Chose Country
await page.locator('#country').selectOption("India");

// Selecting Mulltiple colour
  await page.locator('#colors').selectOption(['red', 'blue', 'green']);


  // Select multiple options by value
  await page.locator('#animals').selectOption(['lion']);

  // Assertion: confirm selected values
  await expect(page.locator('#animals')).toHaveValues(['lion']);



  // Selecting Date Picker 1 (mm/dd/yyyy)
  await page.locator('#datepicker').fill('06/03/1997');
  // Manual wait for 3 seconds
  await page.waitForTimeout(5000);
  // confirm the date value
  await expect(page.locator('#datepicker')).toHaveValue('06/03/1997');
});
