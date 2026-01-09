    // pages/LoginPage.js
    const { Page } =  require('@playwright/test');

const { faker } = require('@faker-js/faker');


    export class CreateAccount {
        constructor(page) {
            this.page = page;
            this.usernameInput = page.locator('input[name="username"]');
            this.passwordInput = page.locator('input[name="password"]');
            this.loginButton = page.getByRole('button', { name: 'Login' });

        }
    async gotot() {
       // await this.page.goto('https://cphq.staging.secureplatformtech.com/login');
        await this.page.getByLabel('White Label *').click();
        await this.page.getByLabel('ABF - ABSOLUTE FINANCIAL SOLUTIONS').click();
        await this.page.getByRole('button', { name: 'Next Step' }).click();
    }
    async personaldetails() {
        
await page.pause(20000);
        const FCity = faker.location.city()
        const Fstreet = faker.location.street()
        const FZipCode = faker.location.zipCode()
        const FCompaney = faker.company.name()
        const FMobNo = faker.phone.number()
        const FJobTitle = faker.person.jobTitle()
        const FEmail = faker.internet.email();
        const FPassort = 'OJK6789';
        const Ffrstname = faker.person.firstName();
        const FCompname = faker.company.name();
        const Lstname = faker.person.lastName();
        const Street1 = faker.location.street();
        const PinCd = faker.location.zipCode();
        const MobNo = '234234423'


        await this.page.getByLabel('First Name *').fill(Ffrstname);
        await this.page.getByLabel('Last Name *').fill(Lstname);
        await this.page.getByLabel('Title *', { exact: true }).click();
        await this.page.getByLabel('Prof.').click();
        await this.page.getByLabel('Passport/ID Card No *').fill(FPassort);
        await this.page.getByLabel('Street *').fill(Fstreet);
        await this.page.getByLabel('No. *').fill(FZipCode);
        await this.page.getByLabel('City *').fill(FCity);
        await this.page.getByLabel('Country *').click();
        await this.page.getByLabel('Aruba', { exact: true }).click();
        await this.page.getByLabel('Postal Code *').fill(FZipCode);
        await this.page.getByLabel('Place of Birth *').fill(FCity);
        await this.page.getByLabel('Country of Birth *').click();
        await this.page.getByLabel('Aruba', { exact: true }).click();
        await this.page.getByLabel('Nationality *').click();
        await this.page.getByLabel('Indian', { exact: true }).click();
        await this.page.getByLabel('Fiscal Residence *').click();
        await this.page.getByLabel('Aruba', { exact: true }).click();
        await this.page.getByLabel('Marital Status *').click();
        await this.page.getByLabel('Single', { exact: true }).click();
        await this.page.getByLabel('Email *').fill(FEmail);
        await this.page.getByLabel('Mobile Number *').fill(MobNo);
        await this.page.getByLabel('I am *').click();
        await this.page.getByLabel('Employed', { exact: true }).click();
        await this.page.getByLabel('Job Title *').fill('FJobTitle');
        await this.page.getByLabel('Name of Employer *').fill(FCompname);
        await this.page.getByLabel('Date of Birth *').click();
       await this.page.locator('button').filter({ hasText: '2025' }).click();
        await this.page.getByLabel('1983').click();
        await this.page.getByRole('gridcell', { name: '10', exact: true }).nth(1).click();
       
        await this.page.getByLabel('Place of Birth *').click();
        await this.page.getByRole('button', { name: 'Next Step' }).click();
        await this.page.getByText('Secondary Address').click();
        await this.page.getByText('Primary Address').click();
        await this.page.getByLabel('Movement During Last 6 Month').click();
        await this.page.getByLabel('Street Name').click();
        await this.page.getByLabel('Street Name').fill(Street1);
        await this.page.getByLabel('Street No').click();
        await this.page.getByLabel('Street No').fill('1');
        await this.page.getByLabel('Postal Code').click();
        await this.page.getByLabel('Postal Code').fill(PinCd);
        await this.page.getByLabel('Place/City').click();
        await this.page.getByLabel('Place/City').fill(FCity);
        await this.page.getByLabel('Country').click();
        await this.page.getByLabel('Anguilla').click();
        await this.page.getByRole('button', { name: 'Submit' }).click();

    await this.page.getByLabel('Account Type *').waitFor({ state: 'visible' });
    const h1Text = await page.locator("h1").first().textContent();
    const hyphenIndex = h1Text.indexOf('-');
    const desiredText = h1Text.substring(hyphenIndex + 1).trim();
    return await this.desiredText.textContent();
    }
   
    }
    module.exports = { CreateAccount };



  