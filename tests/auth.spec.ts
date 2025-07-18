import { Browser, chromium, Locator, Page, test } from '@playwright/test'
import { channel } from 'diagnostics_channel'
import path from 'path';

test("Authentication Test", async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: "chrome" });
    const brownser_context_1 = await browser.newContext();
    const page: Page = await brownser_context_1.newPage();

    // below approach is not good for authorisation
    // await page.goto("http://userid:userpass@quiz-fe.hematitecorp.com/");

    const email: Locator = await page.locator("#email");
    const passsword: Locator = await page.locator("#password");
    const button: Locator = await page.locator("[type='submit']");

    const u_email :string = "abinesh.ashokan@changepond.com";
    const u_pass :any = "Dreamabi@1714";

    
    const authHeader = "Basic " + btoa(u_email + ":" + u_pass);

    page.setExtraHTTPHeaders({ Authorization: authHeader });

    await page.goto("http://quiz-fe.hematitecorp.com/");
    await email.fill("abinesh.ashokan@changepond.com");
    await passsword.fill("Dreamabi@1714");
    await button.click();


    console.log(authHeader);
    

    // await new Promise(()=>{});

})