import {test, expect} from "@playwright/test";

// Syntax:
/* 
test("title", ()=>{
// step1
// step2
// step3
}); 
*/

// fixture global variable: page, browser
test("Verify page URL", async ({page})=>{

    await page.goto("https://tutorialsninja.com/demo/");

    let url: string = await page.url();
    console.log("Url:", url);

    await expect(page).toHaveURL(/tutorialsninja/);
});