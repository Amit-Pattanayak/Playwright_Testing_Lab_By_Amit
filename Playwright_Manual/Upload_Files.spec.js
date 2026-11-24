import {test,expect}from '@playwright/test'

test('Upload file',async({page})=>{
    await page.goto("https://demoqa.com/upload-download");

    await page.locator("#uploadFile").click();

    await page.waitForTimeout(3000);


})