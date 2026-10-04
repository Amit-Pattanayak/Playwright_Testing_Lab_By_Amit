
import{test,expect} from '@playwright/test'

test ('practice', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const Name=await page.getByPlaceholder('Enter Name');
expect(Name).toBeEmpty();
expect(Name).toBeVisible();
await Name.fill("Amit");

const Male=await page.locator('#male');
await Male.click();
expect(Male).toBeChecked();

const Sunday=await page.locator("//input[@id='sunday']");
const Wednesday=await page.locator("//input[@id='wednesday']");
await Sunday.click();
await Wednesday.click();
expect(Wednesday).toBeChecked();
expect(Sunday).toBeChecked();


await page.locator('#country').selectOption("India");
// Assertion: confirm India is selected
await expect(page.locator('#country')).toHaveValue('india');


await page.locator("#colors").selectOption('Red','Green');


})
