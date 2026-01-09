const { test, expect } = require('@playwright/test');

const { faker } = require('@faker-js/faker');

import { LoginPage } from '../pages/login.js';
import { Menus } from '../pages/menu.js';
import { whitelabel } from '../pages/whitelabel.js'

test('White label', async ({ page }) => {
        
    const login = new LoginPage(page);
        await login.goto();
        await login.login('justin.barrett','AsWmQhbGqjgU');
  await page.pause(20000);
        const menus = new Menus(page);
        await menus.loginmenu( 'White Labels', 'Manage White Label');

    const WLc = new whitelabel(page)
        await WLc.createnewwhitelabel();
        await WLc.configuration();
        await WLc.Consultants();
        //await WLc.ownerofbusiness();
        await WLc.subsidary();
        await WLc.ExpectedBusiness();
        await WLc.Documents();
  
 /* await page.getByRole('textbox', { name: 'Code/Name' }).click();
  await page.getByRole('textbox', { name: 'Code/Name' }).fill('ama');
  await page.getByRole('textbox', { name: 'Code/Name' }).press('Enter');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Open menu' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'View Details' }).click();
  await page.getByRole('button', { name: 'Documents' }).click();
  */



    await WLc.Documents();
    await page.pause();

})