

const { test, expect } = require('@playwright/test');

const { faker } = require('@faker-js/faker');
import { LoginPage } from '../pages/login.js';

test('Login Functionality', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('justin.barrett','AsWmQhbGqjgU');

  await page.getByRole('menuitem', { name: 'Accounts' }).click();
  await page.getByRole('menuitem', { name: 'Manage Accounts' }).click();
 
    await page.getByRole('link', { name: 'View All Accounts' }).click();
await page.getByPlaceholder('Search Accounts').click();
  await page.getByPlaceholder('Search Accounts').fill(desiredText);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Open menu' }).click(); 
await page.getByRole('row', { name: 'ABF00261' }).getByRole('button').nth(1).click();
await page.getByRole('row', { name:  'ABF00261'  }).getByRole('button').nth(1).click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Modify' }).click();

   await page.getByRole('button', { name: 'Subsidiary' }).click();
  await page.getByLabel('Subsidiary').click();
  await page.getByLabel('Main Subsidiary').getByText('Main Subsidiary').click();
 
  
  await page.getByRole('button', { name: 'Save' }).click();

    //  await page.exexpect('Success! The subsidiary has been updated.').toBeVisible();


   
  await page.locator("xpath=//button[normalize-space()='Save']").click();
   page.on('dialog', async dialog => {
        // Assert the message
        expect(dialog.message()).toBe('Success! The subsidiary has been updated.');
        // Accept or dismiss the dialog
        await dialog.accept();
    });

  await page.getByRole('button', { name: 'Risk Profile' }).click();
  await page.getByLabel('Currency *').click();
  await page.getByLabel('USD').click();
  await page.locator('#acc-risk-profile div').filter({ hasText: '- 24,999 EUR' }).nth(2).click();
  await page.getByLabel('- 24,999 EUR').click();
   await page.getByLabel('ConservativeYou attach great').click();
   await page.getByLabel('Rental Income').click();




  await page.getByRole('button', { name: 'Save' }).click();
   
  await page.locator("xpath=//button[normalize-space()='Save']").click();


  await page.getByLabel('Bank Name').fill(FAccNo);
  await page.getByLabel('Branch').click();
  await page.getByLabel('Branch').fill('TEST');
  await page.getByLabel('Country').click();
  await page.getByLabel('Argentina').click();
  await page.getByLabel('Add Disbursement Account').click();
  await page.getByRole('button', { name: 'Save changes' }).click();


  await page.getByRole('button', { name: 'Account Config' }).click();
  await page.getByLabel('isClientAllowedToPurchase').click();
  await page.getByLabel('isClientAllowedToSell').click();
  
 
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator("xpath=//button[normalize-space()='Save']").click();
  
 
  await page.getByRole('button', { name: 'Fees & Charges' }).click();
  await page.locator('input[name="fees\\.' + 0 +'\\.value"]').click();
  await page.locator('input[name="fees\\.' + 0 +'\\.value"]').press('ArrowRight');
  await page.locator('input[name="fees\\.' + 0 +'\\.value"]').fill('5');

const numberOfItems = 47;
 for (let i = 1; i < numberOfItems; i++) {
        await page.locator('input[name="fees\\.' + i +'\\.value"]').click();
  await page.locator('input[name="fees\\.' + i +'\\.value"]').press('ArrowRight');
  await page.locator('input[name="fees\\.' + i +'\\.value"]').fill('5');
    }


  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator("xpath=//button[normalize-space()='Save']").click();

   await page.pause(20000);

    await page.getByRole('link', { name: 'View All Accounts' }).click();
await page.getByPlaceholder('Search Accounts').click();
  await page.getByPlaceholder('Search Accounts').fill(desiredText);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Open menu' }).click(); 

  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();

//   await page.getByRole('button', { name: 'Documents' }).click();

//await page.setInputFiles('input[type="file"]', 'C:\Users\Priyanka\Downloads\Pasted Graphic 1-20251010-071814.png');

    await page.pause();


});
