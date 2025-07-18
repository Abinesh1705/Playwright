import { Browser, BrowserContext, chromium, Page, test, Locator, expect } from '@playwright/test'

test("BrowserContext", async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: "chrome" });


    // BROWSER CONTEXT

    const browserContext_1: BrowserContext = await browser.newContext();
    const page_1: Page = await browserContext_1.newPage();


    const browserContext_2: BrowserContext = await browser.newContext();
    const page_2: Page = await browserContext_1.newPage();

    // page1 credintial

    await page_1.goto("http://quiz-fe.hematitecorp.com/");

    const email1: Locator = await page_1.locator("#email");
    const passsword1: Locator = await page_1.locator("#password");
    const button1: Locator = await page_1.locator("[type='submit']");

    await email1.fill("abinesh.ashokan@changepond.com");
    await passsword1.fill("Dreamabi@1714");
    await button1.click();

    const title1 = await page_1.title();
    console.log("Home page_1 title", title1);
    await page_1.screenshot({ path: 'VoucherCode.png' });

    expect(title1).toEqual("Quiz App");



    // page2 Credential

    await page_2.goto("http://quiz-fe.hematitecorp.com/");

    const email2: Locator = await page_2.locator("#email");
    const passsword2: Locator = await page_2.locator("#password");
    const button2: Locator = await page_2.locator("[type='submit']");

    await email2.fill("rajapandi.p@changepond.com");
    await passsword2.fill("Raju@123");
    await button2.click();

    const title2 = await page_2.title();
    console.log("Home page_2 title", title2);
    await page_2.screenshot({ path: 'VoucherCode.png' });

    expect(title2).toEqual("Quiz App");

    // await new Promise(()=>{});

})