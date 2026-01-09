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
  //await page.getByPlaceholder('Search Accounts').fill('ABF00261');
 /// await page.getByRole('button', { name: 'Search' }).click();
 // await page.getByRole('button', { name: 'Open menu' }).click(); 
/////await page.locator('xpath=//tbody/tr[1]').getByRole('button', { name: 'Open menu' }).click(); 

await page.getByPlaceholder('Search Accounts').click();
  await page.getByPlaceholder('Search Accounts').fill('HCF00130');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Open menu' }).click(); 




 await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Modify' }).click();
 await page.getByRole('button', { name: 'Sell' }).click();
 
   //await page.pause(20000);
  await page.getByLabel('ISIN').click();
  await page.getByLabel('IE00BH3T0F73').getByText('IE00BH3T0F73').click();
await page.getByLabel('Cash Amount').fill('100');
  await page.getByLabel('Upload File').click();
  await page.getByLabel('Upload File').setInputFiles('Monday 5 pm.txt');
  await page.getByLabel('Upload File').click();
  await page.getByLabel('Upload File').setInputFiles('C:/Users/Priyanka/OneDrive/Desktop/termSheet_20250701.pdf');
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Re-Enter Details' }).click();
  await page.getByLabel('ISIN').click();
  await page.getByLabel('IE00BH3T0F73').click();
  await page.getByLabel('Cash Amount').fill('100');
  await page.getByRole('button', { name: 'Confirm' }).click();

    await page.pause();


});