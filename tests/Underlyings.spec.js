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
await menus.loginmenu( 'Structured Products', 'Underlyings');


const FCompaney = faker.company.name();
const FCountry = faker.location.country();
const test = FCompaney;


await page.getByRole('button', { name: 'Create' }).click();
await page.getByRole('textbox', { name: 'Name *' }).fill(FCompaney);
await page.getByRole('textbox', { name: 'Country' }).fill(FCountry);
await page.locator("button[type='submit']").click();
await page.getByRole('textbox', { name: 'Search' }).fill(test);
await page.getByRole('button', { name: 'Search' }).click();
await page.waitForLoadState('networkidle');
await page.getByRole('button', { name: 'Open menu' }).click(); 
await page.getByRole('menuitem', { name: 'Edit' }).click();
await page.getByRole('textbox', { name: 'Name *' }).fill('test');
await page.locator("button[type='submit']").click();

await page.pause();

})