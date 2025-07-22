import {test,expect} from '@playwright/test';

test("API MOCKING",async({page})=>{
   await page.route("api/user",(route)=>{
    route.fulfill({
        status :200,
        contentType:'application/json',
        body : JSON.stringify([
            {id:1,name:"Gokul"},
            {id:2,name:"Abinesh"}
        ]),
    })
   });

   await page.goto("http://127.0.0.1:5501/Form/apimocking.html");
   const userList = await page.locator(".user").allTextContents();
    
   await expect(userList).toContain("Abinesh");
    
})