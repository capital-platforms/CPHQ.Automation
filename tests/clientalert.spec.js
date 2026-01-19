const { test, expect } = require('@playwright/test');

const { faker } = require('@faker-js/faker');

import { LoginPage } from '../pages/login.js';
import { Menus } from '../pages/menu.js';


test('Login Functionality', async ({ page }) => {
      const login = new LoginPage(page);
      await login.goto();
      await login.login('justin.barrett','AsWmQhbGqjgU');

      const menus = new Menus(page);
      await menus.Reportloginmenu( 'Reports', 'Reports', 2 , 'Client Alerts');
 

      await page.getByLabel('Email:').fill('test@user.com');
      await page.getByRole('button', { name: 'Request' }).click();
      const message = page.getByText(
      'The Client Alerts Report is being generated and will be sent to your email within a few minutes.',
      { exact: true }
);

await expect(message).toBeVisible();


      await page.pause(2000)

  



})