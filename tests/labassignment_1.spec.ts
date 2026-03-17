import {test, expect, Locator} from "@playwright/test";

// Assignment 1:
test("Input Box Validation: FirstName", async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/Register.html");

    const firstName: Locator = page.locator("input[placeholder='First Name']");
    // Check if the input box is displayed
    await expect(firstName).toBeVisible();

    // Check if the input box is enabled
    await expect(firstName).toBeEnabled();
    
    // Validate if it's a mandatory field
    await page.click('#submitbtn');
    // Cast to HTMLInputElement so TS knows validationMessage exists
    const errorVisible = await firstName.evaluate(el => (el as HTMLInputElement).validationMessage);
    console.log("Validation Message:", errorVisible);
    expect(errorVisible).not.toBe(""); // ensures it's required

    // Verify the placeholder text
    const placeholderText: string | null = await firstName.getAttribute("placeholder");
    console.log("Placeholder Text:", placeholderText);
    expect(placeholderText).toBe("First Name");


    // Validate the maximum length of input allowed
    // Check if maxlength attribute exists
    const maxLength = await firstName.getAttribute("maxlength");
    console.log("Max Length Attribute:", maxLength);

    if (maxLength) {
        // Try entering a string longer than maxlength
        const longInput = "A".repeat(parseInt(maxLength) + 5);
        await firstName.fill(longInput);

        const actualValue = await firstName.inputValue();
        console.log("Actual Value Length:", actualValue.length);

        // Assert that browser enforces maxlength
        expect(actualValue.length).toBeLessThanOrEqual(parseInt(maxLength));
    } else {
        console.log("No maxlength attribute set for First Name field");
    }


    // Enter a name in the input box.
    await firstName.fill("Lukehs");

    // Retrieve and print the text from the input box
    const inputText: string = await firstName.inputValue();
    console.log("Input text from the input box:", inputText);

});





// Assignment 2:
test.only("Radio Button Validation: Gender", async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/Register.html");

    const maleRadioButton: Locator = page.locator("input[value='Male']");
    const femaleRadioButton: Locator = page.locator("input[value='FeMale']");

    
    await expect(maleRadioButton).toBeVisible();
    await expect(maleRadioButton).toBeEnabled();
    await expect(femaleRadioButton).toBeVisible();
    await expect(femaleRadioButton).toBeEnabled();
    
    // Get the status of the "Male" and "Femal" radio button.
    console.log("Male Radio Button Checked Initially:", await maleRadioButton.isChecked());
    console.log("Female Radio Button Checked Initially:", await femaleRadioButton.isChecked());


    // Select the "Male"radio button.
    await maleRadioButton.check();
    expect(await maleRadioButton.isChecked()).toBeTruthy();
    expect(await femaleRadioButton.isChecked()).toBeFalsy();

    console.log("After Select Male Radio Button..........")
    // Retrieve and print the selected status of the "Male" radio button again.
    console.log("Male Radio Button Checked Statsu:", await maleRadioButton.isChecked());
    console.log("Female Radio Button Checked Statsu:", await femaleRadioButton.isChecked());



    // Select Female radio button
    await femaleRadioButton.check();
    expect(await femaleRadioButton.isChecked()).toBeTruthy();
    expect(await maleRadioButton.isChecked()).toBeFalsy();


    console.log("After Select Female Radio Button..........")
    // Retrieve and print the selected status of the "Female" radio button again.
    console.log("Female Radio Button Checked Statsu:", await femaleRadioButton.isChecked());
    console.log("Male Radio Button Checked Statsu:", await maleRadioButton.isChecked());


    
});