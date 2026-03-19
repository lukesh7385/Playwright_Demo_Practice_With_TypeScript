import {test, expect, Locator, Page} from "@playwright/test";


async function selectDate(targetYear: string, targetMont: string, targetDate: string, page: Page, isFuture: boolean)
{
     while(true)
    {
        const curruntMonth = await page.locator(".ui-datepicker-month").textContent();
        const curruntYear = await page.locator(".ui-datepicker-year").textContent();
        
        if(curruntMonth === targetMont && curruntYear === targetYear)
        {
            break;
        };
        
        if(isFuture)
        {
            await page.locator(".ui-datepicker-next").click(); // future
        }
        else{
            await page.locator(".ui-datepicker-prev").click(); // past
        };


    }
    const allDates = await page.locator(".ui-datepicker-calendar td").all();

    for (let dt of allDates)
    {
        const dateText = await dt.innerText();
        if(dateText === targetDate){
            await dt.click()
            break;
        };
    };
};




test("JQuery datepicker", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.setViewportSize({ width: 1920, height: 1080 });

    const dateInput: Locator = page.locator("#datepicker");
    await expect(dateInput).toBeVisible();

    // Approach 1: using fill() method
    // await dateInput.fill("06/25/2025");

    
    //Approach 2: using date picker 
    await dateInput.click(); // opens the date picker


/*     // future target date
    const year = "2028";
    const mont = "May";
    const date = "10"; */

    // past target date
    const year = "2022";
    const mont = "May";
    const date = "10";

    selectDate(year, mont, date, page, false); // use flag for: futureDate -> true   pastDate -> false
    
    // const expectedDate = '05/10/2028'; // mm/dd/yyyy
    const expectedDate = '05/10/2022'; // mm/dd/yyyy
    await expect(dateInput).toHaveValue(expectedDate);

    await page.waitForTimeout(5000);
});