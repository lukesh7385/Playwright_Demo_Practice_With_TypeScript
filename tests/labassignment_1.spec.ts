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
test("Radio Button Validation: Gender", async ({ page }) => {

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


// Assignment 3:
test.only("Checkbox Validation: Hobbies", async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/Register.html");

    // 1. Select the checkbox for "Hockey".
    // await page.locator("#checkbox3").check();



    // 2. Capture all available hobbies and print the count
    const allHobbies: Locator[] = await page.locator(".col-md-4 div input[type='checkbox']").all();
    const count = allHobbies.length;
    console.log("Count of all the Hobbies is:", count);
    expect(count).toBe(3);


   /*  // 3. Select all hobbies using loop.
    for(let hobb of allHobbies)
    {
        if(await hobb.isChecked())
        {
            continue;

        }
        else{
            await hobb.check();
        }
    } */

    
    
    
    // // 4. select the last 2 hobbies using loop
    // for(let i=allHobbies.length-2; i < allHobbies.length; i++)
    // {
    //     await allHobbies[i].check()
    // }
            
    // await page.waitForTimeout(5000); 
    


/*     // 5. Select first 2 Hobbies using loop.
    for(let i = 0; i < 2; i++)
    {
        await allHobbies[i].check();
    } */



   /*  // 6. Select hobbies randomly using a loop
    for(let i = 0; i< allHobbies.length; i++){
        if(i === 0 || i === 2){
            await allHobbies[i].check();
        }
    } */



    // 7. Select hobbies based on the values using a switch-case-statement
    type Hobby = 'Cricket' | 'Movies' | 'Hockey';

    async function selectHobby(page: any, hobby: Hobby){
        switch(hobby){
            case 'Cricket':
                await page.locator("[value='Cricket']").check();
                break;
            
            case 'Movies':
                await page.locator("[value='Movies']").check();
                break;

            case 'Hockey':
                await page.locator("[value='Hockey']").check();
                break;

            default:
                const _exhaustiveCheck: never = hobby;
                return _exhaustiveCheck;
        }
    }

// calling the function
// await selectHobby(page, "Cricket");

// Asserting the result
// await expect(page.locator("[value='Cricket']")).toBeChecked();





// user can select multiple hobbies
const myHobbies: ('Cricket' | 'Movies' | 'Hockey')[] = ['Cricket', 'Hockey'];

for (const hobby of myHobbies) 
{
    await selectHobby(page, hobby);
}

});


