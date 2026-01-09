import { TIMEOUT } from 'dns';

    // pages/LoginPage.js
    const { Page } =  require('@playwright/test');

const { faker } = require('@faker-js/faker');
    export class Bond {
        constructor(page) {
            this.page = page;
          
        }
 
    async createbond(mode, pagetype) {
      console.log(pagetype);
     
            const noo1 = Math.floor(Math.random() * 10000000000).toString();
            const NISIN1 = 'XS' + noo1;
            faker.seed(123);
            const FName1 = faker.company.name();
            faker.seed(2);
            const IRate = Math.floor((Math.random() * 9) + 1).toString();
            const CPRate = Math.floor((Math.random() * 9) + 1).toString();
            const BRate = Math.floor((Math.random() * 9) + 1).toString();
            
            const min = 100;
            const max = 10000;
            const BidPrice = Math.floor((Math.random() * (max - min + 1)) + min).toString();
            const MinInv =  Math.floor((Math.random() * (max - min + 1)) + min).toString();
            const FName2 = faker.company.name();
            await this.page.getByLabel('Name *').fill(FName1);
            await this.page.getByLabel('ISIN *').fill(NISIN1);
            await this.page.getByLabel('Currency *').click();
            await this.page.getByLabel('USD').click();
            await this.page.getByLabel('Sub-Distributor *').click();
            //if (pagetype == 1)
           // {
            await this.page.getByLabel('Accruvis').click();
            //}
            //else 
            //{
           // await this.page.getByLabel('Pardus').click();  //pp
            //await this.page.getByLabel('Accruvis').click();
           // }
            await this.page.locator('div').filter({ hasText: /^Term \(Years\) \*$/ }).click();
            await this.page.getByLabel('Term (Years) *').fill('5');
            await this.page.locator('input[name="yieldPercentage"]').click();
            await this.page.locator('input[name="yieldPercentage"]').fill(IRate);
            await this.page.getByLabel('Frequency *').click();
            await this.page.getByLabel('MONTHLY').click();
            await this.page.getByLabel('Minimum Investment *').fill(MinInv);
            await this.page.getByLabel('Bid Price *').fill(BidPrice);
            await this.page.locator('input[name="totalInterestRate"]').fill('5');
            await this.page.locator('input[name="ifaRate"]').fill(IRate);
            await this.page.locator('input[name="cpRate"]').fill(CPRate);
            await this.page.locator('input[name="bdmRate"]').fill(BRate);
           
            if (mode == 1)
            {
                 await this.page.locator('input[name="factSheet"]').setInputFiles('tests/files/Payment.pdf');
            await this.page.locator('input[name="memorandum"]').setInputFiles('tests/files/Payment.pdf');
            await this.page.getByRole('button', { name: 'Create' }).click();
            }
        else if (mode == 2)
           {
            await this.page.getByRole('button', { name: 'Edit' }).nth(2).click();
  await this.page.getByRole('link', { name: 'Back to list' }).click();
           }
           else if (mode == 3)
           {
            await this.page.getByRole('button', { name: 'Edit' }).nth(2).click();
  await this.page.getByRole('link', { name: 'Back to list' }).click();
           }
            return NISIN1;

            
    }
 
    async Fdownload(menutobedownload) {
        await this.page.pause(2000)
       await this.page.getByRole('button', { name: 'Open menu' }).click(); 
        const downloadPromise = this.page.waitForEvent('download', {timeout: 60000});
        const clickPromise = this.page.getByRole('menuitem', { name: menutobedownload }).click();
        
        const result = await Promise.race([
        downloadPromise,
        new Promise(resolve => setTimeout(() => resolve(null), 5000))
        ]);

        if (result) {
        console.log(`Downloaded: ${await result.suggestedFilename()}`);
        } 
        else {
        console.log('No download detected. Checking message...');
      }
     
    }





     async Export(menutobedownload) {
      

       await this.page.getByRole('button', { name: menutobedownload }).click(); 
        const downloadPromise = this.page.waitForEvent('download');
        const clickPromise = this.page.getByRole('button', { name: menutobedownload }).click();
        
        const result = await Promise.race([
        downloadPromise,
        new Promise(resolve => setTimeout(() => resolve(null), 5000))
        ]);

        if (result) {
        console.log(`Downloaded: ${await result.suggestedFilename()}`);
        } 
        else {
        console.log('No download detected. Checking message...');
      }
    }
     async Assign ()
     {
      await this.page.pause(20);
       const min = 100;
       const max = 10000;
    const numberOfItems = 5;

            for (let i = 0; i < numberOfItems; i++) {
            
             if (i== 0)
             {
               await   this.page.locator('#companies-0-0').click();
              await this.page.getByRole('spinbutton').first().fill('10');
             }
             else
              {
            await   this.page.locator('#companies-'+ i +'-'+ i).click();
            const randomScaledNum = Math.floor(Math.random() * (max - min + 1)) + max;
            await this.page.getByRole('spinbutton').nth(i).fill('10');
             }
            }
       this.page.getByRole('button', { name: 'Save' }).click();
        }
          
     async subsidiaries ()
     {
      await this.page.getByRole('tab', { name: 'CPL Subsidiaries' }).click();
      await this.page.pause(20);
       const min = 100;
       const max = 10000;
    const numberOfItems = 5;
              for (let i = 0; i < numberOfItems; i++) {
            
             if (i== 0)
             {
               await   this.page.locator('#subsidiaries-0-0').click();
              await this.page.getByRole('spinbutton').first().fill('10');
             }
             else
              {
            await   this.page.locator('#subsidiaries-'+ i +'-'+ i).click();
            const randomScaledNum = Math.floor(Math.random() * (max - min + 1)) + max;
            await this.page.getByRole('spinbutton').nth(i).fill('10');
             }
            }
        this.page.getByRole('button', { name: 'Save' }).click();

          }
     
}
    module.exports = { Bond };



  