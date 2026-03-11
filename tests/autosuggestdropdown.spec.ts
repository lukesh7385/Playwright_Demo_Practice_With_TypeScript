import {test, expect, Locator} from "@playwright/test";




// Dynamic/Auto suggets drop down (options keeps changing dynamically)
test("Autosuggest dropdown", async ({ page }) => {
    await page.goto("https://www.flipkart.com/");

    await page.locator("span[role='button']").click();
   

    await page.locator("form[class='lilxh_ header-form-search'] input[placeholder='Search for Products, Brands and More']").fill("smart"); // Search text
    await page.waitForTimeout(3000);

    // Get all the suggested options ---> Ctrl + shift + p on DOM ---> emulate a focused page

    const options: Locator =  page.locator("ul>li");

    const count = await options.count(); // 8

    console.log("Number of suggested options:", count);

    // printing all the suggested options in the console

    // console.log("5 th option:", await options.nth(5).innerText());

    /* console.log("Printing all the auto suggestions........")
    for(let i = 0; i < count; i++) 
    {
        // console.log(`${i} th option: ${await options.nth(i).innerText()}`);
        console.log(await options.nth(i).textContent());

    };

    // select / click on the smartphone option

    for(let i = 0; i < count; i++) 
    {
        const text = await options.nth(i).innerText();
        if(text === "smart phones")
        {
            await options.nth(i).click();
            break;
        }
        

    }; */


    // Assignment -- try this using allTextContaint() method

    const allOptions = await options.allTextContents();

    for(const option of allOptions)
    {
        console.log(option);
    }



    await page.waitForTimeout(3000);
});