import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('lukesh01');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@01');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#nava')).toMatchAriaSnapshot(`
    - link "PRODUCT STORE":
      - /url: index.html
      - img
      - text: ""
    `);
  await page.getByRole('link', { name: 'Log out' }).click();
});