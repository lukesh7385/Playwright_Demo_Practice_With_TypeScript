import {test, expect, Locator} from "@playwright/test";


test("static web table", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table: Locator = page.locator("table[name='BookTable'] tbody");

    await expect(table).toBeVisible();

    // 1. count number of rows in table
    const rows: Locator = table.locator("tr"); // Returns all the rows including header
    await expect(rows).toHaveCount(7); // 7  // approach 1

    const rowCount: number =await rows.count();
    console.log("Number of rows in a table: ", rowCount);
    expect(rowCount).toBe(7); // approach 2


    // 2. Count number of headers/columns
    // const columns: Locator = page.locator("table[name='BookTable'] tbody tr th");
    const columns: Locator = rows.locator("th");
    await expect(columns).toHaveCount(4); // 4  approach 1

    const columnsCount: number = await columns.count();
    console.log("Number of columns/headers: ", columnsCount);
    expect(columnsCount).toBe(4); // approach 2



     // 3. Read all data from 2nd row (index 2 means 3rd row including headers)
     const secondRowCells: Locator = rows.nth(2).locator("td");
     const secondRowTexts: string[] = await secondRowCells.allInnerTexts();
     console.log("2nd Row data: ", secondRowTexts); // [ 'Learn Java', 'Mukesh', 'Java', '500' ]

     await expect(secondRowCells).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]); // assertion

     console.log("Printing 2nd row data.........")

     for(let text of secondRowTexts)
     {
        console.log(text);
     }


     // 4. Read all data from the table (excluding header)
     console.log("Printing all the table data..........");

     const allRowsData = await rows.all();

     console.log("BookName  Author  Subject  Price")
     for (let row of allRowsData.slice(1)) // slice(1)---> skip header row
     {
        const cols = await row.locator('td').allInnerTexts();
        console.log(cols.join("\t"));
     }




     // 5. Print book names where author is Mukesh
     console.log("Books writen by mukesh.......")

     const mukeshBooks: string[] = [];
     for(let row of allRowsData.slice(1)) // slice(1)---> skip header row
     {
        const cells = await row.locator('td').allInnerTexts()
        const author = cells[1];
        const book = cells[0];

        if (author === "Mukesh")
        {
            console.log(`${author} \t ${book}`);
            mukeshBooks.push(book);
        }
     }
     expect(mukeshBooks).toHaveLength(2); // Assertion




     // 6. Calculate total price of all books
     let totalPrice: number = 0;
      for(let row of allRowsData.slice(1)) // slice(1)---> skip header row
     {
        const cells = await row.locator('td').allInnerTexts()
        const price = cells[3];
        
        totalPrice = totalPrice + parseInt(price);
     }
     console.log("Total price: ", totalPrice);

     expect(totalPrice).toBe(7100); // Assertion



});