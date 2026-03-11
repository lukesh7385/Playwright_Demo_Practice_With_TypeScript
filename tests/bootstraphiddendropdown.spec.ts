import { test, expect, Locator} from "@playwright/test";

test("bootstrap hidden dropdown", async ({ page }) => {
 
  // Navigating to the URL
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  // Entering username
  const username: Locator = page.locator("input[placeholder='Username']");
  await username.clear();
  await username.fill("Admin");

  // Entering password
  const password: Locator = page.locator("input[placeholder='Password']");
  await password.clear();
  await password.fill("admin123");

  // click on login button
  await page.locator("div button[type='submit']").click();

  // click on the PIM menu
  const pimMenu = page.getByText("PIM");
  await pimMenu.waitFor({ state: "visible" });
  await pimMenu.click();

  // click on job title dropdown
  await page.locator("form i").nth(2).click();
  await page.waitForTimeout(3000);

  // capture all the options from dropdown and count
  const options: Locator = page.locator("div[role='listbox'] span");
  const count: number = await options.count();
  console.log("Number of options in a dropdown:", count);

  console.log("Printing all the options......")
  // print all the options
  for(let i=0; i<count; i++)
  {
    console.log(await options.nth(i).innerText());
  }

});