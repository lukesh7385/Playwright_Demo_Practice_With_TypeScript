import {test, expect, Locator} from "@playwright/test";


test("xpath demo in playwright", async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

    // 1. Absolute xpath - logo
    // const absolutelogo: Locator = page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]");
                        // OR
    const absolutelogo: Locator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]");

    await expect(absolutelogo).toBeVisible();


    // 2. Relative xpath - logo
    const relativelogo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(relativelogo).toBeVisible();


    // 3. contains()
    const products: Locator = page.locator("//h2/a[contains(@href, 'computer')]");
    const productsCount: number = await products.count();
    console.log("No. of computer related products:", productsCount); // 4
    expect(productsCount).toBeGreaterThan(0);

    // console.log(await products.textContent()); // Error: strict mode violation

    console.log("Firs computer relate product:", await products.first().textContent());
    console.log("Last computer relate product:", await products.last().textContent());
    console.log("Nth computer relate product:", await products.nth(3).textContent()); // Index is starting from 0 (Zero)

    let productTitles: string[] = await products.allTextContents(); // getting all the matched products in to an array

    console.log("All computer related products titles", productTitles);

    for(let pt of productTitles){
        console.log(pt);
    }

    // 4. start-with()

    const buildingProducts: Locator = page.locator("//h2/a[starts-with(@href, '/build')]"); // returns multiple elements

    const count = await buildingProducts.count();
    expect(count).toBeGreaterThan(0);


    // 5. text() or .
    const reglink: Locator = page.locator("//a[text()='Register']");
    await expect(reglink).toBeVisible();

    
    // 6. last()
    const lastitem: Locator = page.locator("//div[@class='column follow-us']//li[last()]");
    await expect(lastitem).toBeVisible();
    console.log("Text content of last element", await lastitem.textContent());


    // 7. position()
    const positionitem: Locator = page.locator("//div[@class='column follow-us']//li[position()=3]");
    await expect(positionitem).toBeVisible();
    console.log("Text content of position element", await positionitem.textContent());


});

