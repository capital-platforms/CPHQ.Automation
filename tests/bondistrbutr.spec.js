const { test, expect } = require('@playwright/test');

const { faker } = require('@faker-js/faker');
import { BondDistributor } from '../pages/bondistrbutr.js';
import { LoginPage } from '../pages/login.js';
import { Menus } from '../pages/menu.js';

test('Login Functionality', async ({ page }) => {
//Login
     const login = new LoginPage(page);
     await login.goto();
     await login.login('justin.barrett','AsWmQhbGqjgU');
//Menu
      const menus = new Menus(page);
      await menus.loginmenu( 'Bonds', 'Bond Distributors');


      const bonddr = new BondDistributor(page);
//create new bond distributor
          const Bondname = await bonddr.createbond(1);
          await page.getByPlaceholder('Search').fill(Bondname);
          await page.getByRole('button', { name: 'Search' }).click();
          await page.getByRole('button', { name: 'Open menu' }).click(); 
          await page.getByRole('menuitem', { name: 'View Details' }).click();
          await page.getByRole('button', { name: 'Edit' }).click();

//edit bond distributor
          const Editedbondname = await bonddr.createbond(2);
          await page.getByRole('switch').click();
          await page.getByPlaceholder('Search').fill(Editedbondname);
          //await page.getByRole('button', { name: 'Search' }).click();
          await page.getByRole('button', { name: 'Search' }).click();
          await page.waitForTimeout(2000); 
//Delete 
          await page.getByRole('button', { name: 'Open menu' }).click(); 
          await page.getByRole('menuitem', { name: 'Delete' }).click();
          await page.getByRole('button', { name: 'Delete' }).click();
//make search box clear
          await page.getByPlaceholder('Search').clear();


  //Import
await page.getByRole('button', { name: 'Import' }).click();
  await page.getByRole('button', { name: 'Attachment' }).click();
  
  await page.getByLabel('Attachment').setInputFiles('tests/files/ImportFiles/Bonds_Distributors_1765509366071.csv');

  //await page.getByRole('button', { name: 'Attachment' }).setInputFiles('tests/files/ImportFiles/Bonds_Distributors_1765509366071.pdf');
    //await page.getByRole('row', { name: 'ID Verification *' }).locator('#custom-file-input').setInputFiles('tests/files/Payment1.pdf');
  await page.getByRole('button', { name: 'Import' }).click();
  
 
  //Export
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export' }).click();
  const download = await downloadPromise;
     
});