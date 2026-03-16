import {test, expect, Locator} from "@playwright/test";

test("Verify chrome CPU load in dynamic table", async ({ page}) => {
    // Navigating to the url
    await page.goto("https://practice.expandtesting.com/dynamic-table");

    const table: Locator = page.locator("table.table tbody");
    await expect(table).toBeVisible();

    // Select all the rows, then find number of rows
    const rows: Locator[] = await table.locator('tr').all();
    console.log("Number of rows in a table:", rows);
    expect(rows).toHaveLength(4);

    // Step 1: For Chrome peocess get value of CPU laod.
    // Read each row to check chrome is presence

    let cpuLoad= "";

    for(let row of rows){
        const processName: string = await row.locator("td").nth(0).innerText();
        if(processName === 'Chrome'){
            cpuLoad = await row.locator('td:has-text("%")').innerText();
            // OR
            // cpuLoad = await row.locator("td", {hasText: '%'}).innerText();
            console.log("CPU Load of Chrome:", cpuLoad); // 6.3%
            break;
        }
    }


    // Step 2: Compare it with value in the yellow lable.
    const yellowboxtext: string = await page.locator("#chrome-cpu").innerText();
    console.log("Chrome CPU load from the yellow box:", yellowboxtext);

    if(yellowboxtext.includes(cpuLoad))
    {
        console.log("CPU load of Chrome is equal.");
    }
    else{
        console.log("CPU load of Chrome is Not equal.");
    }

    expect(yellowboxtext).toContain(cpuLoad);

    // await page.waitForTimeout(5000);

    //Assignment - ("https://testautomationpractice.blogspot.com/")
    //Dynamic Web Table 

});