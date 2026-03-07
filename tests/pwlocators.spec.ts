/* 
Locator - Identifies the element on the page.
DOM - Document Object Model
DOM is an API Interface provided by the browser it self

1) page.getByAltText() to locate an element, usually image, by its text alternative.
2) page.getByText() to locate by text content. (non interactive elements)
3) page.getByRole() to locate by explicit and implicit accessibility attributes.
4) page.getByLabel() to locate a form control by associated label's text.
5) page.getByPlaceholder() to locate an input by placeholder.

6) page.getByTitle() to locate an element by its title attribute.
7) page.getByTestId() to locate an element based on its data-testid attribute(other attributes can be configure)
*/

import {test, expect, Locator} from "@playwright/test";

test("Verify Playwright Locators", async ({page})=>{
    await page.goto("https://demo.nopcommerce.com/");

    // 1. page.getByAltText() - identifies images (and similar elements) based on the alt attribute.
    // Use this locator when your element supports alt text such as img and elemnets.

    const logo: Locator = page.getByAltText("nopCommerce demo store");
    // await logo.click();
    await expect(logo).toBeVisible();


    // 2. page.getByText() - find an element by the text it contains. you can match by a substring. exact string.
    // Locate by visible text
    // Use this locator to find non interactibe elements like div, span, p, etc.
    // For interactive elements like button, a, input, etc. use role locators.

    /* <p>welcome</p>
    <div>hello</div> */

/* 
    const text: Locator = page.getByText("Welcome to our store");
    await expect(text).toBeVisible(); */

                        //OR

    // await expect(page.getByText("Welcome to our store")).toBeVisible(); // full string // full text
    // await expect(page.getByText("Welcome to")).toBeVisible(); // provided substring // partial text
    await expect(page.getByText(/Welcome\s+To\s+Our\s+Store/i)).toBeVisible(); // regular expression



    // 2. page.getByTole() - Locating by Role (role is not an attribute)
    /* 
    Role locatores include button, checkboxes, headings, links, tables, and many more and follow w3c specifications for ARIA Role. prefer for interactive elements like buttons, checkboxes, links, lists headings, tables, etc.
    */

    await page.getByRole("link", {name: 'Register'}).click();
    await expect(page.getByRole("heading", {name: 'Register'})).toBeVisible(); // you can also used getByText()



    // 4. page.getByLable() - Locate form control by lable's text
    // When to use: Ideal for form fields with visible labels.

    // await page.getByLabel('First name:').type("Lukesh"); // type is deprecated
    await page.getByLabel('First name:').fill("Lukesh"); 
    await page.getByLabel('Last name:').fill("Ade"); 
    await page.getByLabel('Email:').fill('lukeshade@gmail.com');


    // 5. getByPlaceholder() - Finds element with a given placeholder text.
    // Best for inputs without a lable but havinga placeholder

    await page.getByPlaceholder("Search store").fill('Apple MacBook Pro');



    // 6. page.getByTitle() - to locate an element by its title attribute.
    // When to use: When your element has a meaningful title attribute.
    
    await page.goto("http://127.0.0.1:5500/notes/playwright.locators.html");
    // const link: Locator = page.getByTitle("Home page link");
    // expect(link).toHaveText("Home");

    await expect(page.getByTitle("Go to Home Page")).toHaveText(/home/i);
    await expect(page.getByTitle("Info Box")).toHaveText("Hover over me for info");


    // 7. page.getByTestid() : Locator an element based on its testid attribute (other attributes can be configured)
    // when to use: When text or role-based locators are unstable or not suitable.

    await expect(page.getByTestId("profile-email")).toHaveText("john.doe@example.com");
    await expect(page.getByTestId("profile-name")).toHaveText("John Doe");










})