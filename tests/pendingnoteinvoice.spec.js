const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
import { Bond } from '../pages/bond.js';
import { LoginPage } from '../pages/login.js';
import { Menus } from '../pages/menu.js';
import { existsSync } from 'fs';

test('Login Functionality', async ({ page }) => {
            const login = new LoginPage(page);
            await login.goto();
            await login.login('justin.barrett','AsWmQhbGqjgU');

            const menus = new Menus(page);
            await menus.loginmenu( 'Structured Products', 'Pending Invoices');

      await page.pause(2000)
//click on create note button
           const text = await page.locator(
  'div.flex.items-center.justify-center.text-sm.font-medium'
).textContent();

const totalPages = Number(text.match(/of\s+(\d+)/)[1]);

let totalrecords = ((totalPages-1)*50)

  const bond = new Bond(page);

for (let i = 48; i < totalrecords; i++) {
  // await page.pause(2000)

await page.getByRole('row').nth(i).getByLabel('Open actions menu').click();



  const downloadPromise = page.waitForEvent('download', {timeout: 20000});
        const clickPromise = page.getByRole('menuitem', { name: 'Download' }).click();
        
        const result = await Promise.race([
        downloadPromise,
        new Promise(resolve => setTimeout(() => resolve(null), 5000))
        ]);

        if (result) {
        console.log(`Downloaded: ${await result.suggestedFilename()}`);
        } 
        else {
        console.log('No download detected. Checking message...');
      }




    // await bond.Fdownload('Download')
    /* await page.getByRole('row').nth(i).getByLabel('Open actions menu').click();
     await page.getByRole('menuitem', { name: 'Download' }).click();
     const fs = require('fs');
  if (fs.existsSync('C:\Users\priya\Downloads'))
  {
     expect(dialog.message()).toBe('Success! Invoice has been downloaded.');
  }
else{
    //expect(dialog.message()).toBe('No file is found.');
    const [dialog] = await Promise.all([
  page.waitForEvent('dialog'),
  page.getByRole('button', { name: 'Download' }).click(),
]);

expect(dialog.message()).toBe('No file is found.');
await dialog.accept();
}*/
    }


console.log(totalrecords)

await page.pause(2000)


})