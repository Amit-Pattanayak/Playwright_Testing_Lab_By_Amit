
import {test,expect} from '@playwright/test'

test('TableOperation',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table=await page.locator("#productTable");

    //1) Total number of Row and column 

    const column=await table.locator('thead tr th');
    console.log("Number of column are", await column.count());

    const row=await table.locator('tbody tr');
    console.log("Number of row are", await row.count());
    expect(await column.count()).toBe(4);
    expect(await row.count()).toBe(5);


    //2) Select a perticular product checkbox
    /*
    const MatchedRow=row.filter({
        has:page.locator('td'),
        hasText: 'Tablet'

    })
    MatchedRow.locator('input').check();
*/
    //3) Selecting multiple product checkbox  using Re-usable Function
    await SelectProduct(row, page, 'Smartphone');
    await SelectProduct(row, page, 'Tablet');
    await SelectProduct(row, page, 'Wireless Earbuds');
    
    await page.waitForTimeout(5000);

});

async function SelectProduct(row, page, name )
 {
    const MatchedRow=row.filter({
        has:page.locator('td'),
        hasText: name

    })
    await MatchedRow.locator('input').check();
}