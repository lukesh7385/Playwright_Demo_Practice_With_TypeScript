import {test, expect, Page} from "@playwright/test";

test("authenticated popups", async ({browser}) => {
    
    const context = await browser.newContext({httpCredentials: {username:'admin', password:'admin'}});

    const page =await context.newPage();
    
    // URL
    // https://the-internet.herokuapp.com/basic_auth

    // Syntax
    // https://username:password@the-internet.herokuapp.com/basic_auth

    
    /* // Approach 1: directly pass login along with the url
    // await page.goto("https://the-internet.herokuapp.com/basic_auth");
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");

    await page.waitForLoadState(); // wait for page loaded completely

    await expect(page.locator("div[class='example'] p")).toBeVisible();

    await page.waitForTimeout(5000); */
 

     // Approach 2: Pass the login along with browser context  (Most peferable approach in playwright)
    await page.goto("https://the-internet.herokuapp.com/basic_auth");

    await page.waitForLoadState(); // wait for page loaded completely

    await expect(page.locator("div[class='example'] p")).toBeVisible();

    await page.waitForTimeout(5000); 
   
   
});