import { test } from '@playwright/test';
import { describe } from "node:test";


describe("Test Cases for Sause app", () => {
    test.beforeEach("Hematite Quiz App Login page", async ({ page }) => {
        await page.goto("http://quiz-fe.hematitecorp.com/")

        await page.getByRole('textbox', { name: 'Email Address' }).click();
        await page.getByRole('textbox', { name: 'Email Address' }).fill('abinesh.ashokan@changepond.com');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
        await page.getByRole('textbox', { name: 'Password' }).fill('D');
        await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
        await page.getByRole('textbox', { name: 'Password' }).fill('Dreamabi@1714');
        await page.getByRole('button', { name: 'Sign In' }).click();
    })

    test("Hematite Quiz App Voucher Page", async ({ page }) => {
        await page.getByRole('textbox', { name: 'Enter Voucher code' }).click();
        await page.getByRole('textbox', { name: 'Enter Voucher code' }).fill('WERD45');
        await page.getByRole('button', { name: 'submit' }).click();
    })

    test("Hematite Quiz App logout Page", async ({ page }) => {
        await page.getByRole('button', { name: 'Logout' }).click();
        await page.getByRole('button', { name: 'Logout' }).click();
        
        
    })
});


