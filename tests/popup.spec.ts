import {expect, test} from '@playwright/test';

test("Popup Testing",async({page})=>{
   await page.goto("http://127.0.0.1:5501/Form/assestion.html");
   await page.pause();

   // Test case for alert box

   page.once("dialog",async(dialog)=>{
    console.log(dialog.message);
    await dialog.accept();
   });
   await page.click('button[onclick ="jsAlert()"]');

// confirm box
   page.once("dialog",async(dialog)=>{
    expect(dialog.message).toContain("Confirm")
    await dialog.accept();
   });
   await page.click('button[onclick ="jsConfirm()"]');

//    prompt
   page.once("dialog",async(dialog)=>{
    expect(dialog.message).toContain("Confirm")
    await dialog.accept("Hel;lo Frds");
   });
   await page.click('button[onclick ="jsPrompt()"]');


   
})
