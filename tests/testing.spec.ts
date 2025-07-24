import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { users } from './pages/credentials';

test("Login Testing", async({page})=> {

    for (let user of users) {
        const login = new LoginPage(page);
        await login.goto();
        // await login.login(user.username, user.password); //Testing.spec.ts

    };
})
