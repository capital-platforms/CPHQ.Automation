const { test, expect } = require('@playwright/test');

const { faker } = require('@faker-js/faker');
import { Bond } from '../pages/bond.js';
import { LoginPage } from '../pages/login.js';
import { Menus } from '../pages/menu.js';




test('Login Functionality', async ({ page }, testInfo) => {


    const login = new LoginPage(page);
    await login.goto();
    await login.login('justin.barrett','AsWmQhbGqjgU');

      const menus = new Menus(page);
      await menus.loginmenu( 'Bonds', 'Create Bond');
 
     const bond = new Bond(page);
      let NISIN1 ='';
    NISIN1 = await bond.createbond(1, 1);

    

//Test search functionality 
      await page.getByPlaceholder('ISIN/Name').fill(NISIN1);
      await page.getByRole('button', { name: 'Search' }).click();
      page.waitForTimeout(1000)
      await page.waitForTimeout(2000); 

      await page.getByRole('button', { name: 'Open menu' }).click(); 
      await page.getByRole('menuitem', { name: 'Edit' }).click();
  //Edit
      let NISIN2 ='';
      NISIN2 = await bond.createbond(2, 1);
   
     await page.getByPlaceholder('ISIN/Name').fill(NISIN2);
     await page.getByRole('button', { name: 'Search' }).click();
     //page.waitForTimeout(1000)
     await page.waitForTimeout(2000); 
     // view details-edit
     await page.getByRole('button', { name: 'Open menu' }).click(); 
     await page.getByRole('menuitem', { name: 'View Details' }).click();
     await page.getByRole('button', { name: 'Edit' }).click();

      let NISIN3 ='';
      NISIN3 = await bond.createbond(3, 1);
    

 await page.getByPlaceholder('ISIN/Name').fill(NISIN3);
 //await page.getByRole('button', { name: 'Search' }).click();
await page.getByRole('button', { name: 'Search' }).click();
 page.waitForTimeout(1000)
 await page.waitForTimeout(2000); 
 
      await bond.Fdownload('Fact Sheet')
 
      await bond.Fdownload('Memorandum')
      
  await page.getByRole('button', { name: 'Open menu' }).click(); 
   await page.getByRole('menuitem', { name: 'Assign' }).click();
  //  await page.getByRole('tab', { name: 'CPL Subsidiaries' }).click();
     
    await bond.Assign ();

         await bond.subsidiaries ();
 
         await page.getByPlaceholder('ISIN/Name').fill(NISIN3);
 await page.getByRole('button', { name: 'Search' }).click();
 
  await page.getByRole('button', { name: 'Open menu' }).click(); 
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();

  await page.pause();


});
