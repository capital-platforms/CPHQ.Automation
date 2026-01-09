const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
import { LoginPage } from '../pages/login.js';
import { Menus } from '../pages/menu.js';


test('Login Functionality', async ({ page }) => {
      const login = new LoginPage(page);
      await login.goto();
      await login.login('justin.barrett','AsWmQhbGqjgU');

      const menus = new Menus(page);
      await menus.loginmenu( 'Structured Products', 'Note Issuers');

      const comaneyname = faker.company.name();
     
      await page.getByText('Create').click();
      await page.getByRole('textbox', { name: 'Name *' }).fill(comaneyname);
      await page.locator("button[type='submit']").click();
      await page.getByRole('heading', { name: 'Note Issuers' }).waitFor({ state: 'visible' });
      await page.getByRole('textbox', { name: 'Search' }).fill(comaneyname);
      await page.getByRole('button', {name: 'Search'}).click();
      await page.getByRole('button', { name: 'Open menu' }).first().click();
      await page.getByRole('menuitem', { name: 'Edit' }).click();
      await page.getByRole('textbox', { name: 'Name *' }).fill(comaneyname);
      await page.getByRole('button', { name: 'Save changes' }).click();
      await page.getByRole('textbox', { name: 'Search' }).fill(comaneyname);
      await page.getByRole('button', {name: 'Search'}).click();
      await page.getByRole('button', { name: 'Open menu' }).first().click();
      await page.getByRole('menuitem', { name: 'Delete' }).click();
      await page.getByRole('button', { name: 'Delete' }).click();
      //clear search box and import data
        await page.getByRole('textbox', { name: 'Search' }).fill('');
       /* await page.getByRole('button', { name: 'Import' }).click();
        await page.getByRole('button', { name: 'Attachment' }).click();
        await page.getByLabel('Attachment').setInputFiles('tests/files/ImportFiles/Bonds_Distributors_1765509366071.csv');
        await page.getByRole('button', { name: 'Import' }).click();*/

      await page.pause();

})