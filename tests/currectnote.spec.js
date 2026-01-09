const { test, expect } = require('@playwright/test');

const { faker } = require('@faker-js/faker');

import { Bond } from '../pages/bond.js';
import { Note } from '../pages/note.js';
import { LoginPage } from '../pages/login.js';
import { Menus } from '../pages/menu.js';


test('Login Functionality', async ({ page }) => {
            const login = new LoginPage(page);
            await login.goto();
            await login.login('justin.barrett','AsWmQhbGqjgU');

            const menus = new Menus(page);
            await menus.loginmenu( 'Structured Products', 'Current Notes');

      await page.pause(2000)
//click on create note button
            await page.getByRole('button', { name: 'Create' }).click();
            const note = new Note(page);
            const ISIN = await note.createnote(1);
            await  note.uploadfiles('Fact Sheet *')
            await  note.uploadfiles('Term Sheet *')
            await  page.getByRole('button', { name: 'Create Note' }).click();
            const toast = page.locator('[data-sonner-toast] [data-title]');
            await expect(toast).toBeVisible();
            const message = (await toast.textContent())?.trim();
            expect(message).toBe('Success! a note has been created');

//search and edit note
            await page.getByRole('textbox', { name: 'Search' }).fill(ISIN);
            await page.getByRole('button', { name: 'Search' }).click();
            await page.getByRole('button', { name: 'Open menu' }).click(); 
            await page.getByRole('menuitem', { name: 'Edit' }).click();
            let NOTE ='';
            NOTE = await note.createnote(1);
            const updateBtn = page.getByRole('button', { name: 'Update Note', exact: true });
            await expect(updateBtn).toBeVisible();
            await expect(updateBtn).toBeEnabled();
            await updateBtn.click();
            await page.getByRole('heading', { name: 'Current Notes' }).waitFor({ state: 'visible' });

//search and view detail-edit 
            await page.getByPlaceholder('Search').fill(NOTE);
            await page.getByRole('button', { name: 'Search' }).click();
            await page.getByRole('button', { name: 'Open menu' }).click(); 
            await page.getByRole('menuitem', { name: 'View Details' }).click();
            await page.locator('button').filter({ hasText: 'Close' }).click();
      
//search note and downlaod the factsheet and term sheet
          await page.getByPlaceholder('Search').fill(NOTE);
          await page.getByRole('button', { name: 'Search' }).click();
          await page.waitForTimeout(2000); 

          const bond = new Bond(page);
          await bond.Fdownload('Fact Sheet');
          await bond.Fdownload('Term Sheet');

//search and delete newly created note
          await page.getByPlaceholder('Search').fill(NOTE);
          await page.getByRole('button', { name: 'Search' }).click();
          await page.getByRole('button', { name: 'Open menu' }).click(); 
          await page.getByRole('menuitem', { name: 'Delete' }).click();
          await page.getByRole('button', { name: 'Delete' }).click();

})