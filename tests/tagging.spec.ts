/* 
test1 - sanity
test2 - sanity, regression
test3 - regression


1. Run all sanity tests:
    npx playwright test tests/tagging.spec.ts --grep "@sanity"

2. Run all regression tests:
    npx playwright test tests/tagging.spec.ts --grep "@regression"

3. Run tests which is belongs to both sanity and regression
    npx playwright test tests/tagging.spec.ts --grep "(?=.*@sanity)(?=.*@regression)"

(?=.*@sanity)
(?=.*@regression)

(?=.*@sanity)(?=.*@regression)


4. Run tests belongs to either sanity or regression
    npx playwright test tests/tagging.spec.ts --grep "@sanity | @regression"


5. Run sanity tests which are not belongs to regression
    npx playwright test tests/tagging.spec.ts --grep "@sanity" --grep-invert "@regression"
    
*/

import {test, expect} from "@playwright/test";

/* test("@sanity @regression Check title of the home page", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
}); */


test("Check title of the home page",{tag:'@sanity'}, async ({ page }) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
});

test("Check navigation to Store page",{tag:'@regression'}, async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.locator("text='Store'").click();
    await expect(page).toHaveTitle("Google Store for Google Made Devices & Accessories");
});


test("Check Ask more of your phone text on the top",{tag:['@sanity', '@regression']}, async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.locator("text='Store'").click();
    await expect(page.locator("text='Ask more of your phone.'")).toHaveText("Ask more of your phone.");
});