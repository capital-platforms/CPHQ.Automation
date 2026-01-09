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
      //click on create note button
      await page.getByRole('button', { name: 'Create' }).click();
      const note = new Note(page);
      await note.createnote();

     await  note.uploadfiles('Fact Sheet *')
      await  note.uploadfiles('Term Sheet *')
     await  page.getByRole('button', { name: 'Create Note' }).click();

})