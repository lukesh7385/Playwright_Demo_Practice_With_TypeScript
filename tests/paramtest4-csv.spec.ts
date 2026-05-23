/* 
Pre-requisite
Install the csv parse module to read csv files:
    npm install csv-parse
*/


import { test, expect } from '@playwright/test';
import fs from "fs";
import {parse} from "csv-parse/sync";

// Reading data from csv
const csvPath = "testdata/data.csv";
const fileContent = fs.readFileSync(csvPath, 'utf-8');

/* 
type LoginRecord = {
  email: string;
  password: string;
  validity: string;
};
 
const records = parse<LoginRecord>(fileContent, {
  columns: true,
  skip_empty_lines: true,
}); */


    //  or

/* const records = parse(fileContent, {
  columns: true,
  skip_empty_lines: true,
}) as any[]; */

     // or

const records = parse(fileContent, {
  columns: true,
  skip_empty_lines: true,
}) as Record<string, string>[];





// main test
test.describe('Login data driven test', async () => {

    for (const data of records) {
        test(`Login test for email: ${data.email} and password: ${data.password}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/login");

            // Fill login form
            await page.locator("#Email").fill(data.email);
            await page.locator("#Password").fill(data.password);
            await page.locator("input[value='Log in']").click();

            if (data.validity.toLowerCase() === 'valid') {
                // Assert login link is visible - indicates successful login
                const logoutLink = page.locator('a[href="/logout"]');
                await expect(logoutLink).toBeVisible({ timeout: 5000 });
            } else {
                // Assert error massage is visible
                const errorMessage = page.locator('.validation-summary-errors');
                await expect(errorMessage).toBeVisible({ timeout: 5000 });

                // Assert user is still on the login page
                await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
            }

        });

    }

});

