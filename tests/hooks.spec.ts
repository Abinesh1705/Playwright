import { test } from '@playwright/test'
import {describe} from "node:test";

// test.beforeEach("Hooks Test",async()=>{
//     console.log("Good Morning");    
// })
// test("Hooks Test2",async()=>{
//     console.log("Hi abinesh");    
// })
// test("Hooks Test3",async()=>{
//     console.log("Hi Rajesh");    
// })
// test("Hooks Test4",async()=>{
//     console.log("Hi Dhinesh");    
// })
// test.afterEach("Hooks Test5",async()=>{
//     console.log("Take your Breakfast");    
// })


describe("Test Cases for Sause app", () => {
    test.beforeEach("Login Test", async ({ page }) => {
        await page.goto("https://www.saucedemo.com/v1/");
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.getByRole('button', { name: 'LOGIN' }).click();
        // await page.pause();

    })

    test("Home Page Test", async ({ page }) => {
        // await page.goto("https://www.saucedemo.com/v1/");
        // await page.locator('[data-test="username"]').fill('standard_user');
        // await page.locator('[data-test="password"]').fill('secret_sauce');
        // await page.getByRole('button', { name: 'LOGIN' }).click();

        await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
        await page.locator('div').filter({ hasText: /^\$49\.99ADD TO CART$/ }).getByRole('button').click();
        await page.getByRole('link', { name: 'Test.allTheThings() T-Shirt (' }).click();
        await page.getByRole('button', { name: 'ADD TO CART' }).click();
        // await page.close();

    })

    test("Logout Test", async ({ page }) => {
        // await page.goto("https://www.saucedemo.com/v1/");
        // await page.locator('[data-test="username"]').fill('standard_user');
        // await page.locator('[data-test="password"]').fill('secret_sauce');
        // await page.getByRole('button', { name: 'LOGIN' }).click();

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();

    })
});