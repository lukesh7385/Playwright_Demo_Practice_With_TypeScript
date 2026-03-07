import {test, expect, Locator} from "@playwright/test";


test("Verify dropdown contains duplicates", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");


    // const dropdownOptions: Locator = page.locator("#colors>option"); // having duplicates
    const dropdownOptions: Locator = page.locator("#animals>option"); // not having duplicates

    const optionsText: string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());

    const myset = new Set<string>(); // set - duplicates not allowed
    const duplicates: string[] = []; // array - duplicates allowed


    for(const text of optionsText)
    {
        if(myset.has(text))
        {
            duplicates.push(text);
        }
        else{
                myset.add(text);
        }
    }

    console.log(duplicates);

    if(duplicates.length > 0)
    {
        console.log("Duplicate options found.", duplicates);
    }
    else{
        console.log("No duplicate options found....");
    }

    expect(duplicates.length).toBe(0);
    
  
    // await page.waitForTimeout(5000);

});