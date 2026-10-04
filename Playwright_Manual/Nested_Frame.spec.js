
import {test,expect} from '@playwright/test'
test('NestedFrame',async({page})=>{

await page.goto("https://ui.vision/demo/webtest/frames/");

const Frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'});
console.log(Frame3);

//await Frame3.fill("[name='mytext3']",'Amit');

const childframe=await Frame3.childFrames();

childframe[0].locator("//*[@id='i12']/div[3]/div/div").click();

})