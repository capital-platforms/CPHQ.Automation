const { test, expect } = require('@playwright/test');

const { faker } = require('@faker-js/faker');

import { LoginPage } from '../pages/login.js';
import { Menus } from '../pages/menu.js';


test('Cash Possition', async ({ page }) => {
      const login = new LoginPage(page);
      await login.goto();
      await login.login('justin.barrett','AsWmQhbGqjgU');

      const menus = new Menus(page);
      await menus.MovReportloginmenu( 'Reports', 'Weekly Reports' , 'Change Of Agency');
 
await page.getByRole('textbox', { name: 'Name: (Optional)' }).fill('Change Of Agency by Automation testing')
await page.pause(2000)
const exportBtn = page.getByRole('button', { name: 'Export' });
await exportBtn.click();
await exportBtn.locator('.tabler-icon-loader-2').waitFor({ state: 'detached', timeout: 100000 });


if (await page.getByText('There is no data available for the selected date. Please select another date.').isVisible()) {
  // no data
} else {
await page.getByText('Success! The report has been exported.').isVisible()
}


})



  



