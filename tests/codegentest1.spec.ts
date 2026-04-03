import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('lukesh01');
  await page.locator('#loginpassword').fill('test@01');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible({timeout: 20000});
  await expect(page.locator('#nameofuser')).toContainText('Welcome lukesh01');
  await page.getByRole('link', { name: 'Log out' }).click();
});