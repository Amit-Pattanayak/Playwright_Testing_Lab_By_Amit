
import {test,expect}from '@playwright/test'

test('Keyboard action',async ({page})=>{

    await page.goto("https://gotranscript.com/text-compare");
    await page.locator("//textarea[@name='text1']").type("Amit pattanayak");

    //ctrl + A
    await page.keyboard.press('Control+A');
    //ctrl + A
    await page.keyboard.press('Control+C');

    //Tab
    await page.keyboard.down("Tab");
    await page.keyboard.up("Tab");

    //ctrl + V
    await page.keyboard.press('Control+V');

    





})