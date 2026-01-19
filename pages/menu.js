import { Console } from 'console';
import { test, expect } from '@playwright/test';

    // pages/LoginPage.js
    const { Page } =  require('@playwright/test');

    export class Menus {
        constructor(page) {
            this.page = page;
           // this.usernameInput = page.locator('input[name="username"]');
          //  this.passwordInput = page.locator('input[name="password"]');
          //  this.loginButton = page.getByRole('button', { name: 'Login' });

        }
 
    async loginmenu(mainmenu, submenu) {
  

const menuItem = this.page.getByRole('menuitem', { name: mainmenu });

const tabIndex = await menuItem.getAttribute('tabindex');

if (tabIndex !== '0') {
  await this.page.getByRole('menuitem', { name: mainmenu }).click();
}


    if (mainmenu == 'Structured Products' && submenu == 'Create Note')
    {
       await this.page.getByRole('button', { name: submenu }).click();
    }
    else{
       await this.page.getByRole('menuitem', { name: submenu }).click();
    }
   
if (submenu == "Pending Invoices" ||  submenu =="Manage Accounts"  )
{
//do nothing
}
else{
    await this.page.getByRole('heading', { name: submenu }).waitFor({ state: 'visible' });

}

    }


async Reportloginmenu(mainmenu, submenu, index, finalmenu) {

await this.page.pause(2000);
    const menuItem = this.page.getByRole('menuitem', { name: mainmenu });
    const tabIndex = await menuItem.getAttribute('tabindex');
    if (tabIndex !== '0') {
        await this.page.getByRole('menuitem', { name: mainmenu }).click();
    }
        await this.page.getByRole('menuitem', { name: submenu }).nth(index).click();
        await this.page.getByRole('button', { name: finalmenu }).dispatchEvent('click');
    }

    async MovReportloginmenu(mainmenu, submenu, finalmenu) {

await this.page.pause(2000);
    const menuItem = this.page.getByRole('menuitem', { name: mainmenu });
    const tabIndex = await menuItem.getAttribute('tabindex');
    if (tabIndex !== '0') {
        await this.page.getByRole('menuitem', { name: mainmenu }).click();
    }
        await this.page.getByRole('menuitem', { name: submenu }).click();
        await this.page.getByRole('button', { name: finalmenu }).dispatchEvent('click');
    }
   
   
    }
    module.exports = { Menus };



  