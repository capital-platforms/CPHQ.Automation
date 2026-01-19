
const { faker } = require('@faker-js/faker');
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.js';
import { Menus } from '../pages/menu.js';
import path from 'path';
import fs from 'fs';

test('Security Possition', async ({ page }) => {
      const login = new LoginPage(page);
      await login.goto();
      await login.login('justin.barrett','AsWmQhbGqjgU');

      const menus = new Menus(page);
   await menus.MovReportloginmenu( 'Reports', 'Moventum Reports' , 'Security Position');
   
      await page.getByRole('textbox', { name: 'Name: (Optional)' }).fill('Security Position Report by Automation testing')

const exportBtn = page.getByRole('button', { name: 'Export' });
await exportBtn.click();
await exportBtn.locator('.tabler-icon-loader-2').waitFor({ state: 'detached', timeout: 10000 });

if (await page.getByText('There is no data available for the selected date. Please select another date.').isVisible()) {
  // no data
} else {
 
await page.getByText('Success! The report has been exported.').isVisible()
}


})