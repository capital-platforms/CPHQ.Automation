const { test, expect } = require('@playwright/test');

const { faker } = require('@faker-js/faker');
import { Account } from '../pages/account.js';
import { Bond } from '../pages/bond.js';
import { LoginPage } from '../pages/login.js';
import { Menus } from '../pages/menu.js';




test('Login Functionality', async ({ page }, testInfo) => {

    const login = new LoginPage(page);
    await login.goto();
    await login.login('justin.barrett','AsWmQhbGqjgU');

      const menus = new Menus(page);
      await menus.loginmenu( 'Accounts', 'Manage Accounts');

      const account = new Account(page);
      await account.createaccount();
      await account.personaldetails();
      await page.pause(20000)
      await account.subsidary();
      await account.Riseprofile();
      await account.Disbursement();
      await account.AccountConfigration();

  await page.pause();


});
