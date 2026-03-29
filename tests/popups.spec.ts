import {test, expect, Page} from "@playwright/test";

test("handel popups", async ({browser}) => {
    
    const context = await browser.newContext();

    const page =await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);

    // Multiple popups
    // page.waitForEvent('popup')
    // await page.locator("#PopUp").click();


    await Promise.all([page.waitForEvent('popup'), await page.locator("#PopUp").click()]);
    await page.waitForTimeout(2000);

    const allPopupWindows = context.pages();
    console.log("Number of pages/windows", allPopupWindows.length); // 3


    console.log(allPopupWindows[0].url()); // Returns url of main page/parent
    console.log(allPopupWindows[1].url()); 
    console.log(allPopupWindows[2].url()); 

    // Assertion
    expect(allPopupWindows.length).toBe(3);

    for (const pw of allPopupWindows) {
        const title = await pw.title();
        console.log(title);
        if (title.includes('Playwright')) {   // more robust check
            await pw.waitForLoadState('domcontentloaded');
            await pw.locator(".getStarted_Sjon").click();
            await page.waitForTimeout(2000);
            await pw.waitForLoadState('domcontentloaded');
            await pw.waitForTimeout(2000);
            await pw.close();
        }
    }
    await page.waitForTimeout(2000); // parent page wait
});