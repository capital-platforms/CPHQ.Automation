const { test, expect } = require('@playwright/test');

const { faker } = require('@faker-js/faker');
import { LoginPage } from '../pages/login.js';

test('Login Functionality', async ({ page }) => {

  const login = new LoginPage(page);
  await login.goto();
  await login.login('justin.barrett','AsWmQhbGqjgU');

  await page.getByRole('menuitem', { name: 'Accounts' }).click();
  await page.getByRole('menuitem', { name: 'Manage Accounts' }).click();
 

await page.getByPlaceholder('Search Accounts').click();

await page.getByPlaceholder('Search Accounts').click();
await page.getByPlaceholder('Search Accounts').fill('HCF00130');
await page.getByRole('button', { name: 'Search' }).click();
await page.getByRole('button', { name: 'Open menu' }).click(); 




await page.getByRole('menuitem', { name: 'Edit' }).click();
await page.getByRole('button', { name: 'Modify' }).click();
await page.getByRole('button', { name: 'Buy' }).click();
 
   await page.pause(20000);
  await page.getByLabel('ISIN').fill('XS2736713582');
await page.getByLabel('Cash Amount').fill('100');
  await page.getByLabel('Upload File').click();

 // await page.getByLabel('Upload File').setInputFiles('C:/Users/Priyanka/OneDrive/Desktop/termSheet_20250701.pdf');
  await page.locator('input[name="factSheet"]').setInputFiles('tests/files/Payment1.pdf');
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Re-Enter Details' }).click();
  await page.getByLabel('ISIN').fill('XS2736713582');
  await page.getByLabel('Cash Amount').fill('100');
  await page.getByRole('button', { name: 'Confirm' }).click();



  /**  await page.getByLabel('ISIN').click();
  await page.getByLabel('US88160R1014').getByText('US88160R1014').click();
  await page.getByPlaceholder('Max: 10536.75 $ USD').click();
  await page.getByPlaceholder('Max: 10536.75 $ USD').fill('100');
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByPlaceholder('Max: 10536.75 $ USD').click();
  await page.getByRole('button', { name: 'Confirm' }).click(); */
    await page.pause();


});
