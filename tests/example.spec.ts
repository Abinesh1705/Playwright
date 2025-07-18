import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// test('title',async({page})=>{
//   await page.goto('https://www.changepond.com/');

//   await expect(page).toHaveTitle("Leading Digital Transformation with Scalable Solutions: Changepond");
// });


// Testing addtion 

test("addtion",async({page})=>{
  await page.goto('file:///C:/Users/abinesh.ashokan/Documents/Javascript/cal.html');

  await page.fill('#id1','5');
  await page.fill('#id2','3');
  await page.click('.btn1');

  const result = await page.textContent('#res');

  await expect(result?.trim()).toBe('8');

});

// Testing Subsctraction

test("substraction",async({page})=>{
  await page.goto('file:///C:/Users/abinesh.ashokan/Documents/Javascript/cal.html');

  await page.fill('#id1','5');
  await page.fill('#id2','3');
  await page.click('.btn2');

  const result = await page.textContent('#res');

  await expect(result?.trim()).toBe('2');

});

// Testing Multipilcation

test("Multiply",async({page})=>{
  await page.goto('file:///C:/Users/abinesh.ashokan/Documents/Javascript/cal.html');

  await page.fill('#id1','5');
  await page.fill('#id2','3');
  await page.click('.btn3');

  const result = await page.textContent('#res');

  await expect(result?.trim()).toBe('15');

});

// Testing Division

test("Division",async({page})=>{
  await page.goto('file:///C:/Users/abinesh.ashokan/Documents/Javascript/cal.html');

  await page.fill('#id1','15');
  await page.fill('#id2','3');
  await page.click('.btn4');

  const result = await page.textContent('#res');

  await expect(result?.trim()).toBe('5');

}); 