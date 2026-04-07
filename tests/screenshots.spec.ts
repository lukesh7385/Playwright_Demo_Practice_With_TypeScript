import {test, expect} from "@playwright/test";

test("Screenshot Demo", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    const timestamp = Date.now();

    // page screenshot
    // await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png'});

    // full page screenshot
    // await page.screenshot({path:'screenshots/'+'fullpage'+timestamp+'.png', fullPage:true});

    // element screenshot
    // const logo =  page.locator("img[alt='Tricentis Demo Web Shop']");
    // logo.screenshot({path:'screenshots/'+'logo'+timestamp+'.png'});
    // await page.locator("img[alt='Tricentis Demo Web Shop']").screenshot({path:'screenshots/'+'logo'+timestamp+'.png'});

    // specific sections screenshot
    // const featuredProducts = page.locator(".product-grid.home-page-product-grid");
    // await featuredProducts.screenshot({path:'screenshots/'+'featuredProducts'+timestamp+'.png'});

    // await page.locator(".product-grid").screenshot({path:'screenshots/'+'featuredProducts'+timestamp+'.png'});
});




test.only("Screenshot from config", async ({ page }) => {

  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('lukesh01');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@01');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#nameofuser')).toContainText('Welcome lukesh01');
  await page.getByRole('link', { name: 'Log out' }).click();

});