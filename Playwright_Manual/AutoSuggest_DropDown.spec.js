
import {test,expect} from '@playwright/test'

test ('AutoSuggestDropDown' ,async ({page})=>{
    await page.goto("https://www.redbus.in/");

    //Enter the FROM location and select the drop down
    await page.locator("#srcinput").fill("Bhubaneswar");                                                              289
    await page.waitForTimeout(3000);



});