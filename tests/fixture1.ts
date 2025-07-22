import { test as sauce } from '@playwright/test'

type myFixture = {
    login: string;
}

export const test = sauce.extend<myFixture>({

    login: async ({page}, use: any) => {
        await page.goto('https://www.saucedemo.com/v1/index.html');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        const text = await page.textContent('.product_label'); 

        await use(text || '');
        

    }
})