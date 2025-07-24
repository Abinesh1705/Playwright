import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
// import { users } from '../pages/Credintials';
test(`Testing`, async ({ page }) => {
    const objlogin = new LoginPage(page);
    await objlogin.goto();
    await objlogin.login("standard_user", "secret_sauce", "Gokul", " V", "600043");
    // await page.pause();
 
 
 
})