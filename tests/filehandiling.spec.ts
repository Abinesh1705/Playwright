import {test} from '@playwright/test';

test("File Handling",async({page})=>{
   await page.goto("http://127.0.0.1:5501/Form/assestion.html");
   await page.pause();

   const file_path:string = "tests/framework.pptx"; 
   await page.setInputFiles("#d3",file_path);
   await page.locator("#d4").click();


   const [download] =await Promise.all([
    page.waitForEvent('download'),
    page.click('a#downloadbutton')
   ])

   const downloadfilepath = await download.path();
   console.log("Downloading File Path ;",downloadfilepath);
   
})
