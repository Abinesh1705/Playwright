import {test,expect, Locator} from '@playwright/test';

test("Assertion Test",async({page})=>{
    await page.goto("http://hematitecorp.com/");
    await page.pause();

    const course:Locator =  await page.locator("text=OUR COURSES");

    // ASSESRTION IN PLAYWRIGHT
    await expect(course).toHaveCount(1);

    if(await page.$("text=OUR COURSES")){
        await page.locator("text=OUR COURSES").click();
    }

    // Element is Visible or Not 
    await expect(course).toBeVisible();
    await expect.soft(course).toBeHidden();

    // element is enabale or not 
    await expect(course).toBeEnabled();
    await expect.soft(course).toBeDisabled();

    // element is present Text or not
    await expect.soft(course).toHaveText("OUR COURSES");
    await expect.soft(course).not.toHaveText("OUR COURSES");



    

    
})