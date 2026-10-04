
import {test,expect}from '@playwright/test';

test ('Assertion_Exp',async ({page})=>{

    
await page.goto('https://testautomationpractice.blogspot.com/');

// VERIFY THE URL
await expect (page).toHaveURL("https://testautomationpractice.blogspot.com/")

// VERIFY THE TITLE OF THE PAGE 
await expect(page).toHaveTitle("Automation Testing Practice");


//VERIFY ELEMENT IS VISIBLE
const Element=await page.getByPlaceholder('Enter Name');
await expect(Element).toBeVisible();

await page.getByPlaceholder('Enter Name').fill("AMIT PATTANAYAK");
//VERIFY THE INPUT
const NameFld=await page.getByPlaceholder('Enter Name');
await expect(NameFld).toHaveValue("AMIT PATTANAYAK");


// VERIFY THE ELLEMENT IS ENABLE OR DISABLE
const SearchBox=await page.locator("#Wikipedia1_wikipedia-search-input");
await expect(SearchBox).toBeEditable();

await page.locator("//input[@value='wednesday']").check();
//VERIFY THAT CHECKBOX IS CHECKED
await expect(page.locator("//input[@value='wednesday']")).toBeChecked();



//SOFT ASSERTION
//VERIFY THE INPUT USING SOFT ASSERTION

await expect.soft(NameFld).toHaveText("Name");
await page.locator("#email").fill('akpattanayak@gmail.com');




})