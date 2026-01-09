
const { test, expect } = require('@playwright/test');

const { faker } = require('@faker-js/faker');


test('Login Functionality', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('justin.barrett','AsWmQhbGqjgU');

  page.getByRole('button', { name: 'Login' }).click(); 
  await page.getByRole('menuitem', { name: 'BDM' }).click();
  await page.getByRole('menuitem', { name: 'Generate Call Report' }).click();
 
  await page.getByLabel('BDM *').click();
  await page.getByLabel('Alex Robinson').click();
 await page.getByLabel('Company *').click();
  await page.getByLabel('AAL - ASSURED ALLIANCE').getByText('AAL - ASSURED ALLIANCE').click();
 // await page.pause(20000);
 // await page.locator('id=:r3o:-form-item').selectOption({value: '1'});
  await page.getByLabel('Consultant *').click();
  await page.getByLabel('MARK WOODWARD - AAL00118').getByText('MARK WOODWARD - AAL00118').click();
  await page.getByLabel('Call Type *').click();
  await page.getByLabel('Mobile Call').click();
  await page.getByLabel('Reason for Call *').click();
  await page.getByLabel('Follow Up', { exact: true }).click();
  await page.getByLabel('Length of Call *').click();
  await page.getByLabel('01:15').getByText(':15').click();
  await page.getByLabel('Tag Clients (Optional)').click();
  await page.locator('div').filter({ hasText: /^Tag Clients \(Optional\)Select clients\.\.\.No results found\.$/ }).first().click();
  await page.getByPlaceholder('Add any points discussed').click();
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-GB'); 
  await page.getByPlaceholder('Add any points discussed').fill(formattedDate);
  await page.getByLabel('Business Identified? (').click();
  await page.getByLabel('GBP (Optional)').click();
  await page.getByLabel('GBP (Optional)').fill('10');
  await page.getByLabel('USD (Optional)').click();
  await page.getByLabel('USD (Optional)').fill('10');
  await page.getByLabel('EUR (Optional)').click();
  await page.getByLabel('EUR (Optional)').fill('10');
  await page.getByLabel('Other (Optional)').click();
  await page.getByLabel('Other (Optional)').fill('10');
  await page.getByLabel('Anticipated Business Date (').click();
  await page.getByRole('gridcell', { name: '29' }).nth(3).click();
  await page.getByPlaceholder('Enter prospective client name').click();
  await page.getByLabel('Next Call Date *').click();
  await page.getByText('20', { exact: true }).click();
  await page.getByRole('button', { name: 'Generate Call Report' }).click();
  await page.locator('xpath=//tbody/tr[1]').getByRole('button', { name: 'Open menu' }).click(); 

  await page.getByRole('menuitem', { name: 'Download' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
 await page.locator('xpath=.h-full.group').textContent('Success! The Call Report has been downloaded.')
    await page.pause();


});

