//ALERT HANDLE

import{test,expect} from '@playwright/test'


test.skip('Simple Alert', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling Allert handling
     page.on('dialog' ,async dialog =>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();

    })
    await page.getByText('Simple Alert').click();

});

//Confirmation Alert (OK and Cancel button)
test.skip('Confirmation Alert', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling Allert handling
     page.on('dialog' ,async dialog =>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
        //await dialog.dismiss();

    })
    await page.getByText('Confirmation Alert').click();
    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");
    await page.waitForTimeout(5000);
});

//Prompt Alert (Text and submit button)
test('Prompt Alert', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling Allert handling
     page.on('dialog' ,async dialog =>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain("Harry Potter");
        await dialog.accept("Amit");
        //await dialog.dismiss();

    })
    await page.getByText('Prompt Alert').click();
    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello Amit! How are you today?");
    await page.waitForTimeout(5000);
});