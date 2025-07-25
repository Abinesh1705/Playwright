// Scenario:
// You are testing a login page that includes fields for username and password and a login button.
// Task:
// Write a Playwright test that:
// •	Navigates to the login page.
// •	Checks that the username, password fields, and login button are visible.
// •	Ensures the login button is disabled until both fields are filled.


import { Locator,test, expect  } from "playwright/test";

test('Login page functionality test', async({page})=>{
  await page.goto('http://quiz-fe.hematitecorp.com/');

  const usernameField:Locator = page.locator('#email'); 
  const passwordField:Locator = page.locator('#password'); 
  const loginButton:Locator = page.locator("[type='submit']"); 

  await expect(usernameField).toBeVisible();
  await expect(passwordField).toBeVisible();
  await expect(loginButton).toBeVisible();

  const result = await loginButton.isDisabled();
  console.log(result);
  
//   await usernameField.fill('abinesh.ashokan@changepond.com');
//   await passwordField.fill('Dreamabi@1714');

});
