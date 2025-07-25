// Assignment 2: Button Enable/Disable Test
// Scenario:
// On a feedback form, the "Submit" button becomes enabled only after all mandatory fields are filled.
// Task:
// Write a test that:
// •	Checks that the "Submit" button is initially disabled.
// •	Fills out required fields and verifies the button becomes enabled.

import { Locator, test, expect } from "playwright/test";

test('Login page functionality test', async ({ page }) => {
    await page.goto('http://quiz-fe.hematitecorp.com/#/student-feedback');

    const loginButton: Locator = page.locator("[type='submit']");
    await expect(loginButton).toBeDisabled();

    await page.getByRole('textbox', { name: 'Full name*' }).click();
    await page.getByRole('textbox', { name: 'Full name*' }).fill('ABINESH');
    await page.getByRole('textbox', { name: 'Email*' }).click();
    await page.getByRole('textbox', { name: 'Email*' }).fill('abinesh170502@gmail.com');
    await page.getByRole('textbox', { name: 'Contact*' }).click();
    await page.getByRole('textbox', { name: 'Contact*' }).fill('6382568128');
    await page.getByRole('radio', { name: 'Other Branch' }).check();
    await page.getByRole('textbox', { name: 'Other Branch' }).click();
    await page.getByRole('textbox', { name: 'Other Branch' }).fill('changepond');
    await page.locator('input[name="question1"]').click();
    await page.locator('input[name="question1"]').fill('5');
    await page.locator('input[name="question2"]').click();
    await page.locator('input[name="question2"]').fill('5');
    await page.locator('textarea[name="question3"]').click();
    await page.locator('textarea[name="question3"]').fill('good');
    await page.locator('textarea[name="question4"]').click();
    await page.locator('textarea[name="question4"]').fill('nothing');
    await page.locator('textarea[name="question5"]').click();
    await page.locator('textarea[name="question5"]').fill('nothing');

    await expect(loginButton).toBeEnabled();
    

});
