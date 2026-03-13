import {test, expect, Locator} from "@playwright/test";

test("Comparing methods", async({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    const products: Locator = page.locator(".product-title"); // 6

    /* 
    // 1) innerText() vs textContent()
    
    // console.log(await products.nth(1).innerText());  // 14.1-inch Laptop
    // console.log(await products.nth(1).textContent());

    const count: number = await products.count();

    for(let i = 0; i < count; i++)
    {
        // const productName: string = await products.nth(i).innerText(); // Extract plain text. Eliminates whitespaces and line breaks
        // console.log(productName);


        // const productName: null | string = await products.nth(i).textContent(); // Extract text including hidden elements. Includes Extra whitespaces, line breaks, etc.
        // console.log(productName);


         const productName: null | string = await products.nth(i).textContent();// Extract text including hidden elements. Includes Extra whitespaces, line breaks, etc.
        console.log(productName?.trim());

    } 
    */

    // 2) allInnerText() vs allTextContent()
/* 
    console.log("***** Comparing allInnerText() vs allTextContent() *****");

    // const productNames: String[] = await products.allInnerTexts();
    // console.log("Product Names captured by allInnerText():", productNames);


    const productNames: String[] = await products.allTextContents();
    console.log("Product Names captured by allInnerText():", productNames);

    const productNameTrimed: string[] = productNames.map(text => text.trim());
    console.log("Product Names after trimed: ", productNameTrimed);

 */



    // 3) all() - converts Locator ------> Locator[]
    // Returns array of locators
    // Returns array of locators (Stores locators of products)/Converts locator to array of locators(for Iteration)
    
    const productsLocator: Locator[] = await products.all();
    console.log(productsLocator);

    // console.log(await productsLocator[1].innerText());

    // for of loop
    for (let productLoc of productsLocator)
    {
        console.log(await productLoc.innerText());
    }

                    // OR

    // for in loop
    for(let i in productsLocator)
    {
        // const productName: string = await productsLocator[i].innerText();
        // console.log(productName);

        console.log(await productsLocator[i].innerText());
    }


});