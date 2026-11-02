import { test, expect } from '@playwright/test'

// To mousehover 
/*
test('MouseHover', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

   const PointMe= await page.locator("//button[normalize-space()='Point Me']");

   await PointMe.hover();
   await page.waitForTimeout(3000);
   })
*/

//Right Click
/*
test('RightClick', async ({ page }) => {

    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');

    const button = page.locator("//span[normalize-space()='right click me']");
    await button.click({ button: 'right' });
    await page.waitForTimeout(5000);

    const quit = page.locator("//span[text()='Quit']");
    await expect(quit).toBeVisible();

    await quit.click();
});
*/
test('DoubleClick',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const ClickBtn = page.locator("//button[normalize-space()='Copy Text']");
    await ClickBtn.dblclick();

    const Field2=await page.locator("#field2");
    await expect(Field2).toHaveValue("Hello World!");


})