const { test, expect } = require('@playwright/test');

const { faker } = require('@faker-js/faker');


import { LoginPage } from '../pages/login.js';
import { Menus } from '../pages/menu.js';
import { Noteprovider } from '../pages/noteprovider.js';

test('Login Functionality', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('justin.barrett','AsWmQhbGqjgU');



      const menus = new Menus(page);
      await menus.loginmenu( 'Structured Products', 'Note Provider');
      
await page.pause(2000);
     


await page.getByRole('button', { name: 'Create' }).click();
const noteprovid = new Noteprovider(page);

    const companeyname = await noteprovid.createnoteprovider();
//search and edit 
      await page.getByRole('textbox', { name: 'Search' }).fill(companeyname);
          await page.getByRole('button', { name: 'Search' }).click();
          await page.getByRole('button', { name: 'Open menu' }).click(); 
          await page.getByRole('menuitem', { name: 'Edit' }).click();
           const companeyname2 = await noteprovid.createnoteprovider();


await page.getByRole('textbox', { name: 'Search' }).fill(companeyname2);
          await page.getByRole('button', { name: 'Search' }).click();
          await page.getByRole('button', { name: 'Open menu' }).click(); 
          await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Delete' }).click(); 
 await page.pause();

})