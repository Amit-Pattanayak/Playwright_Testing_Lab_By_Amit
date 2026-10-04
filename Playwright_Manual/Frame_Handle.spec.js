
import{test,expect}from '@playwright/test';

test('Frame_Handling',async ({page})=>{

await page.goto("https://ui.vision/demo/webtest/frames/");

const Allframre=await page.frames();
console.log ("number of frames are" + Allframre.length);

// APPROCH 1 : USING NAME OR URL
/*
const Frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'});
console.log(Frame1);

await Frame1.fill("[name='mytext1']",'Amit');
*/
//APPROCH 2 : USING FRAME LOCATOR
 const inputBox=await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
 await inputBox.fill("Hello");


})