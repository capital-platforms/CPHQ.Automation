import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
    const { Page } =  require('@playwright/test');

    export class whitelabel {
        constructor(page) {
            this.page = page;
            this.createWL = page.getByRole('link', { name: 'New White Label' });
            this.country = page.getByRole('combobox', { name: 'Country *' })
            this.companycode = page.getByRole('textbox', { name: 'Company Code *' });
            this.companyname = page.getByRole('textbox', { name: 'Company Name *' });
            this.BusineessAdd = page.getByRole('textbox', { name: 'Business Address' });
            this.mailadd = page.getByRole('textbox', { name: 'Mailing Address' });
            this.emailadd = page.locator('[name="emailAddress"]');
            this.contactno = page.locator('[name="contactNo"]');
            this.companyurl = page.getByRole('textbox', { name: 'Company URL' });
            this.firstnames = page.getByRole('textbox', { name: 'First Name *' });
            this.middlename = page.getByRole('textbox', { name: 'Middle Name' });
            this.lastname = page.getByRole('textbox', { name: 'Last Name *' });
            this.title = page.getByRole('textbox', { name: 'Title *' });
            this.adminemailadd = page.locator('[name="adminEmail"]');
            this.contactno11 = page.getByRole('textbox', { name: 'Contact No. 1 *' });
            this.contactno2 = page.getByRole('textbox', { name: 'Contact No. 2' }); 
            this.create = page.getByRole('button', { name: 'Create' });
            this.searchbox = page.getByRole('textbox', { name: 'Code/Name' });
            this.btnsearch = page.getByRole('button', { name: 'Search' });
            //consultant
            this.tabconsultant = page.getByRole('button', { name: 'Consultants' });
            this.addnewconsultant = page.getByRole('button', { name: 'Add New Consultant' });
this.consultantFname = page.getByRole('textbox', { name: 'First Name *' });
this.consulantLname = page.getByRole('textbox', { name: 'Last Name *' });
this.consultantemail = page.getByRole('textbox', { name: 'Email *' });
this.consultantPHNo = page.getByRole('textbox', { name: 'Phone Number *' });
this.consultantMobNo = page.getByRole('textbox', { name: 'Mobile Number *' });
this.consultantsavebtn = page.getByRole('button', { name: 'Save changes' });
//OWNER OF BUSINESS
        this.tabOOB = page.getByRole('switch', { name: 'Owner Of Business' });
        this.AddnewOOB = page.getByRole('button', { name: 'Add New Business Owner' });
        this.OOBFname = page.getByRole('textbox', { name: 'First Name *' });
        this.OOBLname = page.getByRole('textbox', { name: 'Last Name *' });
        this.OOBEmail = page.getByRole('textbox', { name: 'Email *' });
        this.OOBPHNo = page.getByRole('textbox', { name: 'Phone Number *' });
        this.OOBMobNo = page.getByRole('textbox', { name: 'Mobile Number *' });
        this.OOBbtnSave = page.getByRole('button', { name: 'Save changes' });
        //document 
             this.tabdocument = page.getByRole('button', { name: 'Documents' });
            this.btnUpload = page.getByRole('button', { name: 'Upload' });


        }
      
       Fakerdata() {
            return {
                middlename: faker.person.firstName(),
                companyul :'www.test.com',
                compname :  faker.company.name(),
                email: faker.internet.email(),
                Ffrstname : faker.person.firstName(),
                Lstname : faker.person.lastName(),
                title : faker.person.prefix(),
                Street1 : faker.location.street(),
                MobNo : '234234423',
                emailadd : faker.internet.email()
            };
        }
          randomThreeLetters() {
                const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                let result = "";
                for (let i = 0; i < 3; i++) {
                    result += letters[Math.floor(Math.random() * letters.length)];
                }
                return result;
                }
        async createnewwhitelabel()
        {

            const user = this.Fakerdata();
            const code = this.randomThreeLetters();
await this.page.pause(2000);
                await this.createWL.click();
                await this.country.click();
                 await this.page.locator('[role="option"]').first().click();
                await this.companycode.fill(code);
                await this.companyname.fill(user.compname);
                await this.BusineessAdd.fill(user.Street1);
                await this.mailadd.fill(user.email);
                await this.emailadd.fill(user.emailadd);
                await this.contactno.fill(user.MobNo);
                await this.companyurl.fill(user.companyul);
                await this.firstnames.fill(user.Ffrstname);
                await this.middlename.fill(user.middlename);
                await this.lastname.fill(user.Lstname);
                await this.title.fill(user.title);
                await this.adminemailadd.fill(user.email);
                await this.contactno11.fill(user.MobNo);
                await this.contactno2.fill(user.MobNo);
                await this.create.click();
                await this.searchbox.fill(code);
                await this.btnsearch.click();
                await this.page.getByRole('button', { name: 'Open menu' }).click(); 
                await this.page.getByRole('menuitem', { name: 'View Details' }).click();
                await  this.page.getByRole('button', { name: 'Configuration' }).click();
 
        
        
        
         /* await this.page.getByRole('button', {name: /Landing/}).click();
         await newPage.waitForLoadState('domcontentloaded');

// Example checks
await expect(newPage).toHaveURL(/Landing\.aspx/);
await expect(newPage).toHaveTitle(/Landing/i);
*/





        }
        async configuration()
        {
                this.page.pause(10000)
                //login button
                const [newPage] = await Promise.all([
                this.page.waitForEvent('popup'),   
                 this.page.getByRole('button', {name: /login|Landing.aspx/}).click(),   
                ]);
                await newPage.waitForLoadState();
                await expect(newPage).toHaveURL(/secureplatformtech/);
                await newPage.close();
                await this.page.bringToFront();
                
                //resetpassword button
                const [newPage1] = await Promise.all([
                this.page.waitForEvent('popup'),   
                await this.page.getByRole('button', {name: /PasswordReset.aspx/}).click(),   
                ]);
                await newPage1.waitForLoadState();
                await expect(newPage1).toHaveURL(/secureplatformtech/);
                await newPage.close();
                await this.page.bringToFront();
        }
        async Consultants ()
        {
            await  this.tabconsultant.click();
            await this.addnewconsultant.click();
            await this.page.getByRole('combobox', { name: 'Title *' }).click();
            await this.page.getByRole('option', { name: 'Prof.' }).click();
            await this.consultantFname.click();
            await this.consultantFname.fill('test');
            await this.consulantLname.click();
            await this.consulantLname.fill('test');
            await this.consultantemail.click();
            await this.consultantemail.fill('test@gmail.com');
            await this.page.getByRole('combobox', { name: 'Country' }).click();
            await this.page.getByRole('option', { name: 'Anguilla' }).click();
            
            await this.consultantPHNo.fill('346363563465');
            await this.consultantMobNo.fill('4636456464');
            const combobox = this.page.getByRole('combobox', { name: 'Subsidiary' })

const isDisabled = await combobox.isDisabled();
console.log(isDisabled)
if (isDisabled == false)
{
            await this.page.getByRole('combobox', { name: 'Subsidiary' }).click();
            await this.page.locator('[role="option"]').first().click();
            //   await this.page.locator('span').filter({ hasText: 'Johannesburg' }).click();
}
         
            await this.consultantsavebtn.click();

  this.page.on('dialog', async dialog => {
        // Assert the message
        expect(dialog.message()).toBe('Success. The consultant has been updated.');
        // Accept or dismiss the dialog
        await dialog.accept();
    });


            
        }
        async ownerofbusiness ()
        {


           await this.tabOOB.click();

  await this.AddnewOOB.click();
  await this.page.getByRole('combobox', { name: 'Title *' }).click();
  await this.page.getByRole('option', { name: 'Prof.' }).click();
  await this.OOBFname.fill('test');
  await this.OOBLname.fill('test');

  await this.page.getByRole('textbox', { name: 'Email *' }).fill('test@gmail.com');
  await this.page.getByRole('combobox', { name: 'Country' }).click();
  await this.page.getByLabel('Albania').getByText('Albania').click();
  await this.page.OOBPHNo.fill('2342342343');
  await this.page.OOBMobNo.fill('4234325645');
  await this.page.getByRole('combobox', { name: 'Subsidiary' }).click();
 await this.page.locator('[role="option"]').first().click();
  await this.OOBbtnSave.click();
        }

        async subsidary ()
        {
             await  this.page.getByRole('button', { name: 'Subsidiary' }).click();
            await this.page.getByRole('button', { name: 'Add New Subsidiary' }).click();
  await this.page.getByRole('textbox', { name: 'Branch Name *' }).click();
  await this.page.getByRole('textbox', { name: 'Branch Name *' }).fill('test');
  await this.page.getByRole('combobox', { name: 'Country *' }).click();
 
  await this.page.getByRole('option', { name: 'Afghanistan' }).click();
  
  await this.page.getByRole('textbox', { name: 'Email *' }).fill('test@gmail.com');
  
  await this.page.getByRole('textbox', { name: 'Telephone No. *' }).fill('45654645645');
 
  await this.page.getByRole('textbox', { name: 'Business Address *' }).fill('test');
  await this.page.getByRole('combobox', { name: 'Business Development Manager *' }).click();
  await this.page.getByLabel('Alex Robinson').getByText('Alex Robinson').click();
  await this.page.getByRole('combobox', { name: 'Client Service Manager *' }).click();
  await this.page.getByRole('option', { name: 'Admin SA' }).click();
  await this.page.getByRole('combobox', { name: 'CS Region' }).click();
  await this.page.getByLabel('Far East').getByText('Far East').click();
  await this.page.getByRole('button', { name: 'Edit' }).first().click();
  await this.page.getByRole('textbox').fill('test@gmail.com');
  await this.page.getByRole('button', { name: 'Update' }).click();
  await this.page.getByRole('button', { name: 'Edit' }).nth(1).click();
  await this.page.getByRole('textbox').click();
  await this.page.getByRole('textbox').fill('test@gmail.com');
  await this.page.getByRole('button', { name: 'Update' }).click();
  await this.page.getByRole('button', { name: 'Edit' }).nth(2).click();
  await this.page.getByRole('textbox').click();
  await this.page.getByRole('textbox').fill('test@gmail.com');
  await this.page.getByRole('button', { name: 'Update' }).click();
  await this.page.getByRole('button', { name: 'Create' }).click();

        }
        async ExpectedBusiness()
        {
              await  this.page.getByRole('button', { name: 'Expected Business' }).click();
            await this.page.getByRole('button', { name: 'Add New' }).click();
            await this.page.getByRole('combobox', { name: 'Subsidiary' }).click();
            await this.page.locator('[role="option"]').first().click();
           await this.page.fill('input[name="amount"]', '100');

           await this.page.getByRole('button', { name: 'Create' }).click();
        }
        async Documents()
        {

       
                await  this.tabdocument.click();
                await this.page.pause();
                for (let i = 0; i < 5; i++)
                {
                    if (i==0)
                            {
                                await this.btnUpload.first().click();
                                await this.page.getByRole('button', { name: 'Choose File' }).setInputFiles('tests/files/Payment.pdf');
                                await this.btnUpload.click();
                            }
                    else 
                            {
                                await this.btnUpload.nth(i).click();
                                await this.page.getByRole('button', { name: 'Choose File' }).setInputFiles('tests/files/Payment.pdf');
                                await this.btnUpload.click();
                            }
                    
                }
               /* await this.page.getByRole('button', { name: 'Upload' }).first().click();
                await this.page.getByRole('button', { name: 'Choose File' }).setInputFiles('tests/files/Payment.pdf');
                await this.page.getByRole('button', { name: 'Upload' }).click();

                await this.page.getByRole('button', { name: 'Upload' }).nth(1).click();
                await this.page.getByRole('button', { name: 'Choose File' }).setInputFiles('tests/files/Payment.pdf');
                await this.page.getByRole('button', { name: 'Upload' }).click();

                await this.page.getByRole('button', { name: 'Upload' }).nth(2).click();
                await this.page.getByRole('button', { name: 'Choose File' }).setInputFiles('tests/files/Payment.pdf');
                await this.page.getByRole('button', { name: 'Upload' }).click();

                await this.page.getByRole('button', { name: 'Upload' }).nth(3).click();
                await this.page.getByRole('button', { name: 'Choose File' }).setInputFiles('tests/files/Payment.pdf');
                await this.page.getByRole('button', { name: 'Upload' }).click();

                await this.page.getByRole('button', { name: 'Upload' }).nth(4).click();
                await this.page.getByRole('button', { name: 'Choose File' }).setInputFiles('tests/files/Payment.pdf');
                await this.page.getByRole('button', { name: 'Upload' }).click();

                await this.page.getByRole('button', { name: 'Upload' }).nth(5).click();
                await this.page.getByRole('button', { name: 'Choose File' }).setInputFiles('tests/files/Payment.pdf');
                await this.page.getByRole('button', { name: 'Upload' }).click();

                await this.page.getByRole('button', { name: 'Upload' }).nth(6).click();
                await this.page.getByRole('button', { name: 'Choose File' }).setInputFiles('tests/files/Payment.pdf');
                await this.page.getByRole('button', { name: 'Upload' }).click();*/
                this.page.on('dialog', async dialog => {
                expect(dialog.message()).toBe('Success! Document has been saved.');
                await dialog.accept();
    });
        }

   
    }
    module.exports = { whitelabel };



  