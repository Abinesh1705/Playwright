import { Browser, chromium, Locator, Page, selectors, test } from '@playwright/test';

test("locator Testing", async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();

    await page.goto("http://127.0.0.1:5500/Form/form.html");

    const fname: Locator = await page.locator("#txt1");   // bu using id selector
    const pass: Locator = await page.locator("#txt2");
    // const email: Locator = await page.locator("#txt3");


    const contact: Locator = await page.locator(".txt-contact"); // by using class selector
    const logo: Locator = await page.locator(".logo");

    const content: Locator = await page.locator("text=Registration Form");  // by using text selector

    const address: Locator = await page.locator("css=input.txtadd"); // by using css property
    const pincode: Locator = await page.locator("css=input.txtpin"); // by using css property


    await fname.fill("Abinesh");
    await pass.fill("Abinesh@17");
    // await email.fill("abinesh170502@gmail.com");
    await contact.fill("9876543210");
    await address.fill("Chennai");
    await pincode.fill("600077");


    const logoExist = await logo.isEnabled();
    console.log(logoExist);


    const contectcheck = await content.isEnabled();
    console.log(contectcheck);

    // Xpath selectors
    const email:Locator = await page.locator('xpath=//input[@name="email" and @type="email"]');
    await email.fill("abinesh170502@gmail.com");

    const term_con :Locator = await page.locator('xpath=//input[@name="term" and @type="checkbox"]');
    const termconc_check = await term_con.isEnabled();
    console.log(termconc_check);
    


    







    // await browser.close();


})