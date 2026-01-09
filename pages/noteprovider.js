const { Page } =  require('@playwright/test');
const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

    export class Noteprovider {
        constructor(page) {
            this.page = page;

          
        }
 
  
async createnoteprovider (Notetype)
{
const FCity = faker.location.city()
  const Fstreet = faker.location.street()
  const FZipCode = faker.location.zipCode()
  const FCompaney = faker.company.name()
  const FMobNo = faker.phone.number()
  const FJobTitle = faker.person.jobTitle()
  const FEmail = faker.internet.email();
const Ffrstname = faker.person.firstName();
  const values = ['Adidas AG', 'Adobe', 'Alcoa Corp','ALL ORD', 'American Express Co,', 'HEIDELBERGCEMENT AG O.N.' ];

await this.page.pause(1000)

  
  await this.page.getByRole('textbox', { name: 'Name *' }).fill(FCompaney);
  await this.page.getByRole('textbox', { name: 'Contact Name' }).fill(Ffrstname);
  await this.page.getByRole('textbox', { name: 'Contact Email' }).fill(FEmail);
  await this.page.getByRole('textbox', { name: 'Contact Number' }).fill('67557545554');
  await this.page.getByRole('textbox', { name: 'Contact Address', exact: true }).fill(Fstreet);
  await this.page.getByRole('textbox', { name: 'Contact Address', exact: true }).fill(FZipCode );
  await this.page.getByRole('textbox', { name: 'Contact City' }).fill(FCity);
 //await this.page.getByLabel('Create Note Provider').locator('div').filter({ hasText: 'Contact State/County' }).click();
  await this.page.getByRole('textbox', { name: 'Contact State/County' }).fill('test');
  await this.page.getByRole('textbox', { name: 'Contact Postcode' }).fill('test');
  await this.page.getByRole('combobox', { name: 'Contact Country' }).click();
  await this.page.getByRole('option', { name: 'Albania' }).click();
  await this.page.locator("button[type='submit']").click();
  return FCompaney;
        }
    }

      module.exports = { Noteprovider };