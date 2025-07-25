import { test, expect, Locator } from '@playwright/test'

test('Contact Us Navigation Test', async ({ page }) => {

    await page.goto('http://hematitecorp.com/');

    await page.click('text=Contact Us');
    const newUrl = page.url();

    expect(newUrl).not.toBe('http://hematitecorp.com/#/contact');

    const course: Locator = await page.locator("text=Get In Touch");
    await expect(course).toHaveText("Get In Touch");
    await expect(course).toBeVisible();
});
