import {test, expect, chromium} from "@playwright/test";

test("handel tabs", async () => {
    const browser = await chromium.launch(); // Create browser
    const context = await browser.newContext(); // create context

    // creating page
    const parentPage = await context.newPage();

    await parentPage.goto("https://testautomationpractice.blogspot.com/");

    // 2 statements should go parallely
    // context.waitForEvent('page');// pending, fulfilled, rejected   
    // parentPage.locator("button:has-text('New Tab')").click(); // opens the new tab / new page

    
     const [childPage] = await Promise.all([context.waitForEvent('page'), parentPage.locator("button:has-text('New Tab')").click()]);


     // Approach 1: switch between pages and get titiles (using context)
     const pages = context.pages(); // returns an array
     console.log("Number of pages created:", pages.length);

     console.log("Title of the Parent page:", await pages[0].title());
     console.log("Title of the Child page:",  await pages[1].title());


     // Approach 2: alternate
     console.log("Title of the Parent page:", await parentPage.title());
     console.log("Title of the Child page:",  await childPage.title());



    
});