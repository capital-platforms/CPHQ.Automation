 const { Page } =  require('@playwright/test');
const { expect } = require('@playwright/test');

const { faker } = require('@faker-js/faker');
    export class CloseNote {
        constructor(page) {
            this.page = page;

          
        }
 
  
async createnote (Notetype)
{
  // 
 await this.page.pause(2000);
const values = ['Adidas AG', '^RUT','3M', 'Adidas AG','Amedisys Inc','Banco Santander S.A.', 'Brent Crude Oil Futures', 'Coinbase Global Inc','HP Inc', 'Adobe', 'Alcoa Corp','ALL ORD', 'American Express Co,', 'HEIDELBERGCEMENT AG O.N.' ];
const Currency = ['USD', 'GBP','EUR', 'JPY', 'SGD', 'CAD', 'AUD']
const Frequency = ['Monthly', 'Quarterly', 'Bi-Annually', 'Annually', 'On Maturity']
const Denomination = [1, 100, 1000, 2000]
const protectionBar =['None', 'European', 'Material'] 
const Noteissuer =['BBVA', 'CIBC', 'Commerzbank', 'Marex Financial','RBS'] 
const NoteProvider =['AIS FINANCIAL', 'Neba', 'Portman associates', 'PRIVATAM AG '] 


let randomInt = Math.floor(Math.random() * 13);
const RmInt = Math.floor(Math.random() * 6);
const RFreq = Math.floor(Math.random() * 4);
const Rdeno = Math.floor(Math.random() * 3);
const RPB = Math.floor(Math.random() * 2);
if (randomInt == RFreq)
{
  randomInt = randomInt+1
}
const randomValue = values[randomInt];
let NewrandomValue = values[RFreq];
const CurrencyValue = Currency[RmInt];
const FrequencyValue = Frequency[RFreq];
const DenominationValue = Denomination[Rdeno];
const protectionBarValue = protectionBar[RPB];
const Noteissuervalue = Noteissuer[RFreq];
const NoteProvidervalue = NoteProvider[RFreq];


console.log(randomInt)
console.log(RFreq)

const date = new Date();
//date.setDate(date.getDate() + 10);

//const formattedDate = date.toISOString().split('T')[0];
const currectyear = date.getFullYear();     // YYYY
let newyear = date.getFullYear();  
let day =  Math.floor(Math.random() * 28) + 1;
let pastday = Math.floor(Math.random() * 27) + 1;


console.log(RmInt);
const nextMonth = new Date(
  new Date().getFullYear(),
  new Date().getMonth() + Rdeno,
  1
).toLocaleString('en-US', { month: 'long' });
const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });

if (currentMonth == 'December')
{
  newyear = date.getFullYear()+1;
}



  const noo1 = Math.floor(Math.random() * 10000000000).toString();
            const NISIN1 = 'XS' + noo1;
  const Ticketfee = Math.floor((Math.random() * 9) + 1).toString();
            const CPterm = Math.floor((Math.random() * 9)+1).toString();
            const Nyield = Math.floor((Math.random() * 9)+1).toString();
  //await  this.page.getByRole('button', { name: 'Select references' }).click();

//await this.page.pause(2000)


  await this.page.locator("//button[@class='p-2 rounded-md border border-input text-sm ring-offset-background ring-ring w-full overflow-hidden inline-flex gap-x-2 justify-between items-center']//*[name()='svg']").click();


await  this.page.getByRole('option', { name: randomValue }).click();
await  this.page.getByRole('option', { name: NewrandomValue }).click();
 //await this.page.locator('div[role="option"][data-value="'+randomValue+'"]').click();

  await  this.page.getByRole('textbox', { name: 'ISIN *' }).click();
  await  this.page.getByRole('textbox', { name: 'ISIN *' }).fill(NISIN1);

  await  this.page.getByRole('combobox', { name: 'Currency *' }).click();
  await  this.page.getByRole('option', { name: CurrencyValue }).click();

  await  this.page.getByRole('button', { name: 'Strike Date *' }).click();



// await this.page.pause(2000)
await this.page.getByRole('button', { name: 'Strike Date *' }).click();
await this.page.getByRole('combobox').filter({ hasText: '2026' }).first().click();
const yearOption = this.page.getByRole('option', { name: '2026' });
await expect(yearOption).toBeVisible();
await yearOption.click();
await this.page.locator('button').filter({ hasText: 'January' }).click();
const MonthOption = this.page.getByRole('option', { name: 'January'  });
await expect(MonthOption).toBeVisible();
await MonthOption.click();

if ( Notetype == 1)
{
await  this.page.getByRole('gridcell', { name: '10' }).first().click({ force: true });
}
else{
    await  this.page.getByRole('gridcell', { name: '10' }).first().click({ force: true });
}







await this.page.getByRole('button', { name: 'Maturity Date *' }).click();
await this.page.locator('button').filter({ hasText: '2026' }).last().click();
await this.page.getByRole('option', { name: '2026' }).click();
await this.page.locator('button').filter({ hasText: 'January' }).click();
await  this.page.getByRole('option', { name: 'January' }).click();



if ( Notetype == 1)
{
await  this.page.getByRole('gridcell', { name: '10' }).click();
}
else{
    await  this.page.getByRole('gridcell', { name: '11' }).click();
}




//

  await  this.page.getByRole('combobox', { name: 'Denomination *' }).click();
  await  this.page.getByRole('option', { name: DenominationValue, exact: true }).click();
  await  this.page.getByRole('spinbutton', { name: 'Term *' }).fill(CPterm);
  await  this.page.getByRole('spinbutton', { name: 'yield *' }).fill(Nyield);
  await  this.page.getByRole('spinbutton', { name: 'Commission Rate *' }).fill(Nyield);
  await  this.page.getByRole('spinbutton', { name: 'Ticket Fee *' }).fill(Ticketfee);
  await  this.page.getByRole('combobox', { name: 'Frequency *' }).click();
  await this.page.getByRole('option', { name: FrequencyValue, exact: true}).click();
  //  await  this.page.getByRole('option', { name: DenominationValue, exact: true }).click();
  await  this.page.getByRole('spinbutton', { name: 'Protection Barrier *' }).fill('5');
  await  this.page.getByRole('combobox', { name: 'Protection Barrier Type' }).click();
  await  this.page.getByRole('option', { name: protectionBarValue }).click();
  await  this.page.getByRole('combobox', { name: 'Note Issuer *' }).click();
  await this.page.getByRole('option', { name: Noteissuervalue }).click();
  await this.page.getByRole('combobox', { name: 'Note Provider *' }).click();
  await this.page.getByRole('option', { name: NoteProvidervalue }).click();
  return NISIN1
}


    async uploadfiles (controlname)
    {
      await this.page.getByRole('button', { name: controlname }).setInputFiles('tests/files/Payment.pdf');
    }
   
        }

      module.exports = { CloseNote };