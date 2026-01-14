const { test, expect } = require('@playwright/test');

const { faker } = require('@faker-js/faker');
import { Note } from '../pages/note.js';
import { LoginPage } from '../pages/login.js';
import { Menus } from '../pages/menu.js';


test('Login Functionality', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('justin.barrett','AsWmQhbGqjgU');



      const menus = new Menus(page);
      await menus.loginmenu( 'Structured Products', 'Notes Analytics');
//await page.pause(2000);

const providerCombo = page.locator(
  'button[role="combobox"]',
  { hasText: 'Select Provider' }
);

await providerCombo.waitFor({ state: 'visible' });




      //click on create note button
      await page.getByRole('button', { name: 'Create' }).click();
      const note = new Note(page);
       let Note1 ='';
    Note1 = await note.createnote(1);

     await  note.uploadfiles('Fact Sheet *')
      await  note.uploadfiles('Term Sheet *')
     await  page.getByRole('button', { name: 'Create Note' }).click();
     //search note
     await page.getByRole('textbox', { name: 'Title/ISIN' }).fill(Note1)
     await page.getByRole('button', {name: 'Search' }).click();
     await page.pause()

  



})