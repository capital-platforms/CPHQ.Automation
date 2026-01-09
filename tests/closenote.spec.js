const { test, expect } = require('@playwright/test');

const { faker } = require('@faker-js/faker');
import { Note } from '../pages/note.js';
import { LoginPage } from '../pages/login.js';
import { Menus } from '../pages/menu.js';
import { Bond } from '../pages/bond.js';

test('Login Functionality', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('justin.barrett','AsWmQhbGqjgU');



      const menus = new Menus(page);
      await menus.loginmenu( 'Structured Products', 'create note');


      // currect note =1, close note =2, missing note =3
      const note = new Note(page);
      const NOTE =  await note.createnote(2);
       

      await  note.uploadfiles('Fact Sheet *')
      await  note.uploadfiles('Term Sheet *')
      await  page.getByRole('button', { name: 'Create Note' }).click();
      const toast = page.locator('[data-sonner-toast] [data-title]');
      await expect(toast).toBeVisible();
      const message = (await toast.textContent())?.trim();
      expect(message).toBe('Success! a note has been created');
     await menus.loginmenu( 'Structured Products', 'Closed Notes');

//search note and view detail
      await page.getByPlaceholder('Search').fill(NOTE);
      await page.getByRole('button', { name: 'Search' }).click();
      await page.getByRole('button', { name: 'Open menu' }).click(); 
      await page.getByRole('menuitem', { name: 'View Details' }).click();
      await page.locator('button').filter({ hasText: 'Close' }).click();

//search note and edit
      await page.getByPlaceholder('Search').fill(NOTE);
      await page.getByRole('button', { name: 'Search' }).click();
      await page.getByRole('button', { name: 'Open menu' }).click(); 
      await page.getByRole('menuitem', { name: 'Edit' }).click();
      const NOTE1 =  await note.createnote(2);
      const updateBtn = page.getByRole('button', { name: 'Update Note', exact: true });
      await expect(updateBtn).toBeVisible();
      await expect(updateBtn).toBeEnabled();
      await updateBtn.click();
      await page.getByRole('heading', { name: 'Closed Notes' }).waitFor({ state: 'visible' });

//search note and download files
      await page.getByPlaceholder('Search').fill(NOTE1);
      await page.getByRole('button', { name: 'Search' }).click();
      const bond = new Bond(page);
      await bond.Fdownload('Fact Sheet')
      await bond.Fdownload('Term Sheet')

//search note and delete
      await page.getByPlaceholder('Search').fill(NOTE1);
      await page.getByRole('button', { name: 'Search' }).click();
      await page.getByRole('button', { name: 'Open menu' }).click(); 
      await page.getByRole('menuitem', { name: 'Delete' }).click();
      await page.getByRole('button', { name: 'Delete' }).click();






      await page.pause();

})