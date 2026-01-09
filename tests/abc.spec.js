const { test, expect } = require('@playwright/test');

const { faker } = require('@faker-js/faker');
import { LoginPage } from '../pages/login.js';
import { Menus } from '../pages/menu.js';
import { CreateAccount } from '../pages/createacc.js';


import { Bond } from '../pages/bond.js';

test('Login Functionality', async ({ page }) => {

  const login = new LoginPage(page);
  await login.goto();
  await login.login('justin.barrett','AsWmQhbGqjgU');


      const menus = new Menus(page);
      await menus.loginmenu( 'Bonds', 'Summary');

await page.getByPlaceholder('ISIN/Name').fill('GB00BMFXJ441');
 await page.getByRole('button', { name: 'Search' }).click();
 await page.pause(20000);
  await page.getByRole('button', { name: 'Open menu' }).click(); 
  await page.getByRole('menuitem', { name: 'Assign' }).click();
  const min = 100;
            const max = 10000;

  const numberOfItems = 175;
            for (let i = 2; i < numberOfItems; i++) {
                await page.pause(20000);
            await   page.locator('#companies-'+ i +'-'+ i).click();
            //await   this.page.locator('#companies-'+ i +'-'+ i).click();
            const randomScaledNum = Math.floor((Math.random() * (max - min + 1)) + max).toString();
       
            }
page.getByText('Save').click();




    await page.pause();

});
