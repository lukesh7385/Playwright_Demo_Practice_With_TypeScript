import {test, expect, Locator} from "@playwright/test"

/* test("Handle Dynamic Element using XPath", async ({page})=>{
    // Navigating to the target page
    await page.goto("https://testautomationpractice.blogspot.com/");

    
    // Using XPath
    // Loop to click the button 5 times
    for(let i = 1; i <= 5; i++){

        let button: Locator = page.locator("//button[text()='STOP' or text()='START']"); // Locate the button with either 'STOP' or 'START'
        // let button = await page.locator("//button[@name='start']");
        // let button = await page.locator("//button[@name='start' or @name='stop']");
        // let button = await page.locator("//button[contains(@name, 'st')]");
        //let button = await page.locator("//button[start-with(@name, 'st')]");

        // Click the button
        await button.click();


        // Wait for 2 seconds
        await page.waitForTimeout(2000);
    }
}); */


    

/* // Using css

    test("Handle Dynamic Element using CSS", async ({page})=>{

        // Navigating to the target page
        await page.goto("https://testautomationpractice.blogspot.com/");

        // Loop to click the button 5 times
        for(let i = 1; i <= 5; i++){

            // Locate the button using a CSS attribute selector (name can be 'start' or 'stop')
            let button: Locator = page.locator("button[name='stop'], button[name='start']"); // Locate the button with either 'STOP' or 'START'

            // Click the button
            await button.click();


            // Wait for 2 seconds
            await page.waitForTimeout(2000);
        } 
    });
 */



// Using playwright specific locators

test("Handle Dynamic Element using PW Locators", async ({page}) => { 

    // Navigating to the target page
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Loop to click the button 5 times
    for(let i = 1; i <= 5; i++){

        // Locate the button by role and dynaminc name
        const button = page.getByRole('button', { name: /START | STOP/ });

        // Click the button
        await button.click();


        // Wait for 2 seconds
        await page.waitForTimeout(2000);
    
    } 
});