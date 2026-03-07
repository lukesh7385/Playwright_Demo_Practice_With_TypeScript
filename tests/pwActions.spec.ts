import {test, expect, Locator} from "@playwright/test";

// 1. Text Input / Text Box / Input Box
// 2. Radio Buttons
// 3. Check Boxes



// 1. Text Input / Text Box / Input Box
test("Text Input Actions", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const textBox: Locator = page.locator("#name");
    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();
    const maxlength: string | null = await textBox.getAttribute("maxlength"); // Returns value of maxlenght attribute of the element
    expect(maxlength).toBe('15');

    await textBox.fill("Lukesh Ade");

    // console.log("text content of firstName :", await textBox.textContent()); // returns empty
    
    const enteredValue: string = await textBox.inputValue();
    console.log("text content of firstName :", enteredValue); // returns the input value of the text box
    expect(enteredValue).toBe("Lukesh Ade");

    await page.waitForTimeout(2000);

});



// 2. Radio Buttons
test("Radio Button Actions", async ({ page })=> {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const maleRadio: Locator = await page.locator("#male"); // Male radio button

    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();
    expect(await maleRadio.isChecked()).toBe(false);

    await maleRadio.check(); // select radio button
    expect(await maleRadio.isChecked()).toBe(true);

    await expect(maleRadio).toBeChecked(); // most preferrable assersion


    await page.waitForTimeout(2000);

});


// 3. Check Boxes
test.only("Check Box Actions", async ({ page })=> {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // 1. Select specific checkbox (Sunday) using getByLabel and assert
    const sundayCheckbox: Locator = page.getByLabel("Sunday");
    // await sundayCheckbox.check();
    // await expect(sundayCheckbox).toBeChecked();


    // 2. Select all the checkboxes and assert each is checked
    const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const checkboxes: Locator[] = days.map(index => page.getByLabel(index));
    expect(checkboxes.length).toBe(7);

    // 3. Select all the checkboxes and assert each is checked

    
    for(const checkbox of checkboxes)
    {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    };

    await page.waitForTimeout(2000);

   

    // 4. Uncheck last 3 checkboxes and assert
    for(const checkbox of checkboxes.slice(-3))
    {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    };

    await page.waitForTimeout(3000);

    
    // 5. Toggle checkboxes: If checked, uncheck; if unchecked, check. Assert state flipped
    for(const checkbox of checkboxes)
    {
        if(await checkbox.isChecked()){
            // only if checked
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        }
        else{
            // only if not checked
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    };
    await page.waitForTimeout(3000);


    // 6. Randomely select check boxes - select checkboxes by index (1, 3, 6) and assert
    await page.reload();
    const indexes: number[] = [1, 3, 6];

    for(const i of indexes)
    {
        await checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked();
    }
    await page.waitForTimeout(5000);


    // 7. Select the check box based on the label
    const weekName = "Friday";
    for(const label of days)
    {
        if(label.toLowerCase() === weekName.toLocaleLowerCase()){
            const checkbox = page.getByLabel(label);
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    }
    await page.waitForTimeout(5000);


});