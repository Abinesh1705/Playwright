export class LoginPage {

    constructor(private page:any){

    }
    async goto() {
        await this.page.goto("https://www.saucedemo.com/v1/");
    }

    async login(username: string, password: string) {
        await this.page.locator('#user-name').fill(username);
        await this.page.locator('#password').fill(password);
        await this.page.locator('.btn_action').click();
        // await this.page.pause();
    }
}