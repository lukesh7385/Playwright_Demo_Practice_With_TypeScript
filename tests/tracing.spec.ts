/* 
Three ways to create a trace file(.zip)
--------------------------------------
1) using playwright.config.ts
2) using command
    npx playwright test mytest.spec.ts --trace on
3) code(programmatically)
      context.tracing.start({screenshots: true, snapshots: true});
      //statements
      context.tracing.stop({path:'trace.zip'});



To view trace file (3 ways)
--------------------------
1) from html file---> click on trace.zip
2) through command - npx playwright show-trace trace.zip
3) utility --> https://trace.playwright.dev/  (drag and drop / upload trace.zip file)

*/






import {test, expect} from "@playwright/test";

test("Screenshot from config", async ({ page, context}) => {

  context.tracing.start({screenshots: true, snapshots: true});

  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('lukesh01');
  await page.locator('#loginpassword').fill('test@01');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#nameofuser')).toContainText('Welcome lukesh01');
  await page.getByRole('link', { name: 'Log out' }).click();

  context.tracing.stop({path:'trace.zip'});


});