/* 
only
skip
fail
fixme
slow
*/


import {test, expect} from "@playwright/test";

// only
test('Test1', async ({ page }) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
});

// skip
test.skip('Test2', async ({ page }) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
});


// skip - based on the condition
test('Test3', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium', 'this test skipped if browser is chromium');
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
});

// fail
test.fail('Test4', async ({ page }) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Googl");
});


// fixme
test.fixme('Test5', async ({ page }) => {
    await page.goto("https://www.google.com/");
    // No assertion
});


// slow
test('Test6', async ({ page }) => {
    test.slow(); // triple the default timeout (default: 30 secs, after tripling: 90 secs)
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
});






