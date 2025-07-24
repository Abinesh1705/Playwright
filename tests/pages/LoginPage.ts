export class LoginPage {

    constructor(private page: any) {

    }
    async goto() {
        await this.page.goto("https://www.saucedemo.com/v1/index.html");
    }

    async login(username: string, password: string,firstname:string,secondname:string,postalcode:any) {
        await this.page.locator('#user-name').fill(username);
        await this.page.locator('#password').fill(password);
        await this.page.locator('.btn_action').click();
        // await this.page.pause();
        await this.page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
        await this.page.getByRole('link', { name: '1' }).click();
        await this.page.getByRole('link', { name: 'CHECKOUT' }).click();
        await this.page.locator('[data-test="firstName"]').fill(firstname);
        await this.page.locator('[data-test="lastName"]').fill(secondname);
        await this.page.locator('[data-test="postalCode"]').fill(postalcode);
        await this.page.getByRole('button', { name: 'CONTINUE' }).click();
        await this.page.getByRole('link', { name: 'FINISH' }).click();
        await this.page.pause();

    }
}