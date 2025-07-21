import {test,expect,Locator} from '@playwright/test';

test("Custom Assertion",async({page})=>{
    await page.goto("http://127.0.0.1:5500/Form/assestion.html");
    await page.pause();


    const textValue:any = await page.locator("#d1").textContent();
    const value:any = parseInt(textValue || '0');
    await expect(value > 10).toBeTruthy(); 

    // check character is graater than 5

    // const charValue: any = await page.locator("#d2").textContent();
    // const length: any = charValue.length;

    // await expect(length > 5 ).toBeGreaterThan(5);
    // await expect(length > 5 ).toBeTruthy();

    const mesage = await page.locator('#d2');
    await minCharLength(mesage,5);

})

const minCharLength=async(locator:any,minLength:number)=>{
    const text = await locator.textContent();
    await expect(text || ''.length).toBeGreaterThan(minLength);
}
