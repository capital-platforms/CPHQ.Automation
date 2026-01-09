    // pages/LoginPage.js
    const { Page } =  require('@playwright/test');

    export class LoginPage {
        constructor(page) {
            this.page = page;
            this.usernameInput = page.locator('input[name="username"]');
            this.passwordInput = page.locator('input[name="password"]');
            this.loginButton = page.getByRole('button', { name: 'Login' });

        }
    async goto() {
        await this.page.goto('https://cphq.staging.secureplatformtech.com/login');
    }
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    async getMessage() {
        return this.message.textContent();
    }
    }
    module.exports = { LoginPage };



  