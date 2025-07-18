import {test,expect, Locator, Browser, chromium, Page} from '@playwright/test'

test("login test",async()=>{
    const browser:Browser = await chromium.launch({headless : false});
    const page: Page = await browser.newPage();
    
    await page.goto("http://quiz-fe.hematitecorp.com/");

    const email:Locator = await page.locator("#email");
    const passsword:Locator = await page.locator("#password");
    const button:Locator = await page.locator("[type='submit']");

    await email.fill("abinesh.ashokan@changepond.com");
    await passsword.fill("Dreamabi@1714");
    await button.click();

    const title = await page.title();
    console.log("Home Page title",title);
    await page.screenshot({path :'VoucherCode.png'});

    expect(title).toEqual("Quiz App");
    // browser.close();
    
});