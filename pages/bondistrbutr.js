 
 import { TIMEOUT } from 'dns';
const { Page } =  require('@playwright/test');

const { faker } = require('@faker-js/faker');
    export class BondDistributor {
        constructor(page) {
            this.page = page;
          
        }
 
    async createbond(mode) {
        const Ffrstname = faker.person.firstName();
        const FEmail = faker.internet.email();
        const Street1 = faker.location.street();
        const FCity = faker.location.city();
        const Fcompaney = faker.company.name();
        const PinCd = faker.location.zipCode();
        const FCountry = faker.location.country();
        const FMobNo = faker.phone.number();

   if (mode == 1)
            {
           await this.page.getByRole('link', { name: 'Create Distributor' }).click();
            }
            await this.page.locator('[name="distributorName"]').fill(Fcompaney);
            await this.page.getByRole('textbox', { name: 'Display Name' }).fill(Fcompaney);
            await this.page.locator('[name="settlementDays"]').fill('1');
            await this.page.getByRole('textbox', { name: 'Contact Name' }).fill(Ffrstname)
            await this.page.getByRole('textbox', { name: 'Contact Email' }).fill(FEmail)
            await this.page.getByRole('textbox', { name: 'Contact Phone' }).fill('84734554656');
            await this.page.locator('[name="addressLine1"]').fill(PinCd);
            await this.page.getByRole('textbox', { name: 'Contact Address 2' }).fill(Street1);
            await this.page.getByRole('textbox', { name: 'Contact City' }).fill(FCity);
            await this.page.getByRole('textbox', { name: 'Contact State/Country' }).fill(FCountry);
            await this.page.getByRole('textbox', { name: 'Contact Postcode' }).fill(PinCd);
            await this.page.getByRole('switch', { name: 'Active' }).click();
            await this.page.getByRole('switch', { name: 'Master' }).click();
            if (mode == 1)
            {
           await this.page.getByRole('button', { name: 'Create' }).click();
            }
            
            else
            {
                await this.page.getByRole('button', { name: 'Edit' }).click();
            }
            return Fcompaney;
    }
}
    module.exports = { BondDistributor };



  
 