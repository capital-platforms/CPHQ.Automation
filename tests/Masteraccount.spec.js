const { test, expect } = require('@playwright/test');

const { faker } = require('@faker-js/faker');
import { MasterAccount } from '../pages/masteraccount.js';
import { Bond } from '../pages/bond.js';
import { LoginPage } from '../pages/login.js';
import { Menus } from '../pages/menu.js';




test('Login Functionality', async ({ page }, testInfo) => {

    const login = new LoginPage(page);
    await login.goto();
    await login.login('justin.barrett','AsWmQhbGqjgU');

      const menus = new Menus(page);
      await menus.loginmenu( 'Accounts', 'Manage Accounts');

      const account = new MasterAccount(page);
      await account.createaccount();
      await account.personaldetails();
      await account.subsidary();
      await account.Riseprofile();
      await account.Disbursement();
      await account.AccountConfigration();
      await account.Documents();

  await page.pause();


});
