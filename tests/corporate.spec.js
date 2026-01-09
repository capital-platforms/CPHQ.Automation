const { test, expect } = require('@playwright/test');

const { faker } = require('@faker-js/faker');
import { LoginPage } from '../pages/login.js';

test('Login Functionality', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('justin.barrett','AsWmQhbGqjgU');
 
  await page.getByRole('menuitem', { name: 'Accounts' }).click();
  await page.getByRole('menuitem', { name: 'Manage Accounts' }).click();
  await page.getByRole('link', { name: 'Open New Account' }).click();
  await page.getByLabel('White Label *').click();
  await page.getByLabel('ABF - ABSOLUTE FINANCIAL SOLUTIONS').click();
  await page.getByRole('button', { name: 'Next Step' }).click();
  

  await page.getByLabel('Consultant *').click();
  await page.getByLabel('DAVE RIGGS - ABF000007').click();

  await page.getByLabel('Corporate Account?', { exact: true }).click();

  await page.getByLabel('Stand Alone or Linked *').click();
  await page.getByLabel('STAND-ALONE').click();


  await page.getByLabel('Instant Access or Term Account *').click();
  await page.getByLabel('Instant access account', { exact: true }).click();
  await page.getByLabel('Classic or Flexible Fee Schedule *').click();
  await page.getByLabel('CLASSIC', { exact: true }).click();
 
  await page.getByRole('button', { name: 'Next Step' }).click();


  const FEmail = faker.internet.email();

    await page.getByLabel('Company Reg No *').fill('test');
    await page.getByLabel('Company Name *').fill('test');
    
    await page.getByLabel('Memorable Name *').fill('test');
    await page.getByLabel('Company Corporation *').fill('test');
    
    await page.getByLabel('Registered Address *').fill('test');
   
    await page.getByLabel('Country *', { exact: true }).click();
    await page.getByLabel('Algeria').click();


    await page.getByLabel('Postal Code *').fill('test');
    
    await page.getByLabel('Country of Incorporation *', { exact: true }).click();
    await page.getByLabel('Algeria').click();


    await page.getByLabel('Street No *').fill('test');
    await page.getByLabel('Place/City *').fill('test');

    await page.getByLabel('Country of Fiscal Residence *', { exact: true }).click();
    await page.getByLabel('Algeria').click();



    await page.getByLabel('Tel (Daytime) *').fill('977457638');  
    await page.getByLabel('Tel (Evening) *').fill('4353464564');
  await page.getByLabel('Mobile Number *').fill('8456783469');  
    await page.getByLabel('Fax *').fill('786548');
    await page.getByLabel('Email *').fill(FEmail);


    await page.getByLabel('Industry Of Company *', { exact: true }).click();
    await page.getByLabel('Algeria').click();


 const FCity = faker.location.city();

  await page.getByLabel('Date of Incorporation *').click();
  await page.locator('button').filter({ hasText: /^2007$/ }).click();
  await page.getByLabel('2004').click();
  await page.getByRole('gridcell', { name: '1', exact: true }).nth(1).click();


 await page.getByRole('button', { name: 'Next Step' }).click();
 await page.getByRole('button', { name: 'Submit' }).click();

  await page.getByLabel('Stand Alone or Linked *').waitFor({ state: 'visible' });
  const h1Text = await page.locator("h1").first().textContent();
  const hyphenIndex = h1Text.indexOf('-');
  const desiredText = h1Text.substring(hyphenIndex + 1).trim();


    await page.getByRole('link', { name: 'View All Accounts' }).click();
await page.getByPlaceholder('Search Accounts').click();
  await page.getByPlaceholder('Search Accounts').fill(desiredText);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Open menu' }).click(); 
 // await page.getByRole('row', { name: 'ABF00261' }).getByRole('button').nth(1).click();
//await page.getByRole('row', { name: h1Text }).getByRole('button').nth(1).click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Modify' }).click();

   await page.getByRole('button', { name: 'Subsidiary' }).click();
  await page.getByLabel('Subsidiary').click();
  await page.getByLabel('Main Subsidiary').getByText('Main Subsidiary').click();
 
  
  await page.getByRole('button', { name: 'Save' }).click();

   
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
  await page.getByRole('button', { name: 'Save' }).click();

    const FAccName = faker.finance.accountName(); 
  const FAccNo = faker.finance.accountNumber(); 

 
 await page.getByRole('button', { name: 'Disbursement' }).click();
  await page.getByRole('button', { name: 'Add New' }).click();
  await page.getByLabel('Account Name').click();
  await page.getByLabel('Account Name').fill(FAccName);
 // await page.getByLabel('Account Name').click();


  await page.getByPlaceholder('Limited to 50 char').fill('123456789');
  await page.getByLabel('Blz Swift Code Type').click();
  await page.getByLabel('BLZ', { exact: true }).click();
  await page.getByLabel('Bank Sort Code/ BLZ Code/Swift').click();
  await page.getByLabel('Bank Sort Code/ BLZ Code/Swift').fill(FCity);

  await page.getByLabel('Bank Name').fill(FAccNo);
  await page.getByLabel('Branch').click();
  await page.getByLabel('Branch').fill(FCity);
  await page.getByLabel('Country').click();
  await page.getByLabel('Argentina').click();
  await page.getByLabel('Add Disbursement Account').click();
  await page.getByRole('button', { name: 'Save changes' }).click();


  await page.getByRole('button', { name: 'Account Config' }).click();
  await page.getByLabel('isClientAllowedToPurchase').click();
await page.getByLabel('isClientAllowedToSell').click();
   await page.getByLabel('isConsultantAllowedToPurchase').click();
 
  
 
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator("xpath=//button[normalize-space()='Save']").click();
  
 
  await page.getByRole('button', { name: 'Fees & Charges' }).click();
  await page.locator('input[name="fees\\.' + 0 +'\\.value"]').click();
  await page.locator('input[name="fees\\.' + 0 +'\\.value"]').press('ArrowRight');
  await page.locator('input[name="fees\\.' + 0 +'\\.value"]').fill('5');

const numberOfItems = 53;
 for (let i = 1; i < numberOfItems; i++) {
        await page.locator('input[name="fees\\.' + i +'\\.value"]').click();
  await page.locator('input[name="fees\\.' + i +'\\.value"]').press('ArrowRight');
  await page.locator('input[name="fees\\.' + i +'\\.value"]').fill('5');
    }


  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator("xpath=//button[normalize-space()='Save']").click();

  
  await page.getByRole('button', { name: 'Documents' }).click();

//await page.setInputFiles('input[type="file"]', 'C:\Users\Priyanka\Downloads\Pasted Graphic 1-20251010-071814.png');


//await page.getByRole('row', { name: 'Account Opening Form *' }).locator('#custom-file-input').click();
  //await page.getByRole('row', { name: 'Account Opening Form *' }).locator('#custom-file-input').click();
 // await page.getByRole('row', { name: 'Account Opening Form *' }).locator('#custom-file-input').setInputFiles('termSheet_20250701.pdf');
  await page.getByRole('row', { name: 'Account Opening Form *' }).locator('#custom-file-input').setInputFiles('tests/files/Payment1.pdf');
   await page.getByRole('row', { name: 'ID Card *' }).locator('#custom-file-input').setInputFiles('tests/files/Payment1.pdf');
   await page.getByRole('row', { name: 'ID Verification *' }).locator('#custom-file-input').setInputFiles('tests/files/Payment1.pdf');
  




await page.getByRole('button', { name: 'Save' }).click();
await page.locator("xpath=//button[normalize-space()='Save']").click();


  await page.getByRole('link', { name: 'View All Accounts' }).click();
  await page.getByPlaceholder('Search Accounts').click();
  await page.getByPlaceholder('Search Accounts').fill(desiredText);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Open menu' }).click(); 

 await page.getByRole('menuitem', { name: 'Delete' }).click();
 await page.getByRole('button', { name: 'Delete' }).click();
 
    await page.pause();


});

