
const { Page } =  require('@playwright/test');
const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
    
export class trustAccount {
        constructor(page) {
          //Veriables coming from npx command
          this.P1 = process.env.P1;
          this.P2 = process.env.P2;
          this.P3 = process.env.P3;
          const { P1, P2, P3 } = process.env;
            
            this.page = page;
            this.createbutton =  page.getByRole('link', { name: 'Open New Account' });
            this.whitelabel = page.getByLabel('White Label *');
            this.nextstep =  page.getByRole('button', { name: 'Next Step' });
            this.consultant = page.getByRole('combobox', { name: 'Consultant *' });
            this.accounttype =page.getByRole('combobox', { name: 'Account Type *' });
            this.DFM = page.getByRole('switch', { name: 'DFM' });
            this.DFMProvider =page.getByRole('combobox', { name: 'DFM Provider *' });
             this.Trustees  = page.getByRole('combobox', { name: 'Trustees *' });
            this.singlejoint =page.getByRole('combobox', { name: 'Single or Joint *' });
            this.Iscorporateacc =page.getByRole('switch', { name: 'Corporate Account?' });
            this.instantorterm =page.getByRole('combobox', { name: 'Instant Access or Term Account *' });
            this.termyears = page.getByRole('textbox', { name: 'Term of Contract (Year)' });
            this.classicorflex =page.getByRole('combobox', { name: 'Classic or Flexible Fee Schedule *' });
            this.IsTMG =page.getByRole('checkbox', { name: 'Is This Account Associated With TMG?' });
            this.Transactionfee =page.getByRole('checkbox', { name: 'Has This Account Confirmed the 0.5% Transaction Fee for Notes?' });
//PERSONAL DETAILS
            this.firstname = page.getByLabel('First Name *');
            this.lastname = page.getByLabel('Last Name *');
            this.title = page.getByLabel('Title *', { exact: true });
            this.whiteproflabel = page.getByLabel('Prof.');
            this.passport = page.getByRole('textbox', { name: 'Passport/ID Card No *' });   
            this.street = page.getByRole('textbox', { name: 'Street *' });
            this.streetno = page.getByRole('textbox', { name: 'No. *' })
            this.city =  page.getByLabel('City *');
            this.Country = page.getByLabel('Country *');
            this.Postcode = page.getByLabel('Postal Code *');
            this.birthplace = page.getByLabel('Place of Birth *');
            this.birtcountry = page.getByLabel('Country of Birth *');
            this.nationality = page.getByLabel('Nationality *');
            this.fiscalresidence = page.getByLabel('Fiscal Residence *');
            this.maritalstatus = page.getByLabel('Marital Status *');
            this.email = page.getByLabel('Email *');
            this.mobile = page.getByLabel('Mobile Number *');
            this.Iam = page.getByLabel('I am *');
            this.jobtitle = page.getByLabel('Job Title *');
            this.birthday = page.getByLabel('Date of Birth *');
            this.birthplace = page.getByLabel('Place of Birth *');
            this.employeer =page.getByRole('textbox', { name: 'Name of Employer *' });
            this.date =    page.getByLabel('Date of Birth *');
            this.submit = page.getByRole('button', { name: 'Submit' });
            //subsidary
            this.subsidarytab =   page.getByRole('button', { name: 'Subsidiary' });
            this.subsidarycombo = page.getByLabel('Subsidiary');
            this.savesubsidary = this.page.getByRole('button', { name: 'Save' });

            this.Riseprofiletab =  page.getByRole('button', { name: 'Risk Profile' });
            this.currency = page.getByLabel('Currency *');
            this.rentalincom = page.getByLabel('Rental Income');
            this.conservative = page.getByLabel('ConservativeYou attach great')
            this.Invstrategy   = page.getByLabel('- 24,999 EUR');
            //disbursment
            this.Disbursementtab =   page.getByRole('button', { name: 'Disbursement' });
            this.AddDisburs = page.getByRole('button', { name: 'Add New' });
            this.accname = page.getByLabel('Account Name');
            this.accno = page.getByRole('textbox', { name: 'Bank Account No' });
            this.swiftcode = page.getByLabel('Blz Swift Code Type');
            this.sortcode = page.getByLabel('Bank Sort Code/ BLZ Code/Swift');
            this.bankname = page.getByLabel('Bank Name');
            this.branch =page.getByLabel('Branch');
            this.savedisburment =  page.getByRole('button', { name: 'Save changes' });
            //Account config
            this.AccConfigttab =  page.getByRole('button', { name: 'Account Config' });
            this.Allowtopurchs = page.getByLabel('isClientAllowedToPurchase');
            this.Allowtopurchssell =page.getByLabel('isClientAllowedToSell')
            //Risk profile
            this.saverishprofile = page.getByRole('button', { name: 'Save' });
            this.saveaccountconfig = page.getByRole('button', { name: 'Save' });
            this.savedocumenttab  = page.getByRole('button', {name : 'Save'});
          }
 
async createaccount() {
    await this.page.pause(2000);
const values = ['AAL - ASSURED ALLIANCE', 'ABB - ABBEY INTERNATIONAL SOLUTIONS INC','ABD - ABD WORLD GROUP'
    , 'ACH - ACHIEVE CAPITAL','ACS - ALBION CAPITAL STRATEGIES','AFG - ATLAS FINANCIAL GROUP', 
    'AMA - AUSTEN MORRIS ASSOCIATES', 'AME - AUSTEN MORRIS ASSOCIATES EUROPE','CPS - CAPITAL PLATFORMS', 'GCF - GLOBAL CHOICE FINANCIAL GROUP'
    , 'HEX - HEXAGONE INTERNATIONAL LTD','HEC - HEXAGONE CAPITAL LIMITED', 'MCG - MELBOURNE CAPITAL GROUP', 'OFP - OFFSHORE PLANNING' ];


      let randomInt = Math.floor(Math.random() * 9);
      const randomValue = values[randomInt];
      //Create new while label
      await this.createbutton.click();
      await this.whitelabel.click();
      await expect(this.whitelabel).toHaveAttribute('aria-expanded', 'true');
      await  this.page.getByRole('option', { name: randomValue }).click();
      await this.nextstep.click();

//Account type tab
      await this.consultant.click();
      await this.page.locator('[role="option"]').first().click();

      await this.accounttype.click();
     // await this.page.locator('[role="option"]').first().click();
     await this.page.locator('[role="option"]', { hasText: 'Trust Account' }).click();

              
      await this.instantorterm.click();
      await this.page.getByRole('option', { name: this.P2, exact: true,}).click();
      if (this.P2 == "Term account")
      {
      //await this.termyears.fill('5')
      await this.page.getByRole('spinbutton', { name: 'Term of Contract (Year)' }).fill('5');
      }
      
      await this.classicorflex.click();
      await this.page.getByRole('option', { name: this.P3, exact: true,}).click();

      
      await this.nextstep.click();
   

}
async personaldetails()  {
    const date = new Date();
    let day =  Math.floor(Math.random() * 28) + 1;
    const currectyear = date.getFullYear();     // YYYY
    let newyear = ((date.getFullYear())-1);  
    const Rdeno = Math.floor(Math.random() * 3);
    const nextMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + Rdeno,
    1
    ).toLocaleString('en-US', { month: 'long' });
    const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });


    const FCity = faker.location.city()
    const FZipCode = faker.location.zipCode()
    const FCompaney = faker.company.name()
    const streetno = '111'
    const FJobTitle = 'CA'
    const FEmail = faker.internet.email();
    const FPassort = 'OJK6789';
    const Ffrstname = faker.person.firstName();
    const FCompname = faker.company.name();
    const Lstname = faker.person.lastName();
    const Street1 = faker.location.street();
    const PinCd = faker.location.zipCode();
    const MobNo = '234234423';

    const titles = ['Prof.','Dr.','Mr.','Mrs/Ms','Mr. & Mrs.','Company','Dipl. Ing','Mag.']

    let randomtitle = Math.floor(Math.random() * 8);
    const title = titles[randomtitle];


        await this.firstname.fill(Ffrstname);
        await this.lastname.fill(Lstname);
        await this.page.getByLabel('Title *', { exact: true }).click();
        await this.page.getByLabel(title).first().click();
        await this.passport.fill(FPassort);
        await this.street.fill(Street1);
        await this.streetno.fill(streetno);
        await this.Country.click();
        await this.page.locator('[role="option"]').first().click();
        await this.city.fill(FCity);
        await this.Postcode.fill(PinCd);
        await this.birthplace.fill(FCity);
        await this.birtcountry.click();
        await this.page.locator('[role="option"]').first().click();
        await this.nationality.click();
        await this.page.locator('[role="option"]').first().click();
        await this.fiscalresidence.click();
        await this.page.locator('[role="option"]').first().click();
        await this.maritalstatus.click();
        await this.page.locator('[role="option"]').first().click();
        await this.email.fill(FEmail);
        await this.mobile.fill(MobNo);
        await this.Iam.click();
        await this.page.locator('[role="option"]').first().click();
        await this.mobile.fill(MobNo);
        await this.jobtitle.fill(FJobTitle);
        await this.employeer.fill(FCompaney);
        await this.date.click();
   

  

await this.page.getByRole('button', { name:  'Date of Birth *' }).click();
await this.page.getByRole('combobox').filter({ hasText: currectyear }).first().click();
const yearOption = this.page.getByRole('option', { name: newyear });
await expect(yearOption).toBeVisible();
await yearOption.click();
await this.page.locator('button').filter({ hasText: currentMonth }).click();
const MonthOption = this.page.getByRole('option', { name: nextMonth });
await expect(MonthOption).toBeVisible();
await MonthOption.click();
await  this.page.getByRole('gridcell', { name: day }).first().click({ force: true });
await this.nextstep.click();
await this.page.getByRole('radio', { name: 'Primary Address' }).click();
await this.submit.click();

  await this.page.getByLabel('Account Type *').waitFor({ state: 'visible' });
}


async subsidary()
{
    await this.page.pause(2000)
    await this.subsidarytab.click();
    await this.subsidarycombo.click();
    await this.page.locator('[role="option"]').first().click();
    await this.page.getByRole('button', { name: 'Save' }).click();
await this.page.locator("xpath=//button[normalize-space()='Save']").click();

}

async Riseprofile()
{
      await this.Riseprofiletab.click();
      await this.currency.click();
      await this.page.locator('[role="option"]').first().click();
      await this.page.locator('#acc-risk-profile div').filter({ hasText: '- 24,999 EUR' }).nth(2).click();
      await this.Invstrategy.click();
      await this.conservative.click();
      await this.rentalincom.click();
      await this.page.getByRole('button', { name: 'Save' }).click();
await this.page.locator("xpath=//button[normalize-space()='Save']").click();
}

async Disbursement ()
{
  const FAccName = faker.finance.accountName(); 
  const FAccNo = faker.finance.accountNumber(); 
  const FCity = faker.location.city()
    
  await this.Disbursementtab.click();
  await this.AddDisburs.click();
  await this.accname.click();
  await this.accname.fill(FAccName);
  await this.accno.fill(FAccNo)
  await this.page.getByLabel('Blz Swift Code Type').click();
  await this.page.getByLabel('BLZ', { exact: true }).click();
  await  this.sortcode.fill(FCity);
  await this.bankname.fill(FAccNo);
  await this.branch.fill(FCity);
  await this.page.getByLabel('Country').click();
  await this.page.getByLabel('Argentina').click();
  await this.page.getByLabel('Add Disbursement Account').click();
 await this.page.getByRole('button', { name: 'Save' }).click();
//await this.page.locator("xpath=//button[normalize-space()='Save']").click();



}
async AccountConfigration ()
{
  await this.AccConfigttab.click();
  await this.Allowtopurchssell.click();
  await this.Allowtopurchs.click();
  await this.page.getByRole('button', { name: 'Save' }).click();
  await this.page.locator("xpath=//button[normalize-space()='Save']").click();
}
async Documents()
{
    await this.page.getByRole('button', { name: 'Documents' }).click();
    await this.page.getByRole('row', { name: 'Account Opening Form *' }).locator('#custom-file-input').setInputFiles('tests/files/Payment.pdf');
    await this.page.getByRole('row', { name: 'ID Card *' }).locator('#custom-file-input').setInputFiles('tests/files/Payment.pdf');
    await this.page.getByRole('row', { name: 'ID Verification *' }).locator('#custom-file-input').setInputFiles('tests/files/Payment.pdf');
    await this.page.getByRole('button', { name: 'Save' }).click();
    await this.page.locator("xpath=//button[normalize-space()='Save']").click();

}


     
}
    module.exports = { trustAccount };



  