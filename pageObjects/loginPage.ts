import {expect, Locator, Page} from '@playwright/test';

export class LoginPage{
    page:                   Page;
    customerLoginHeader:    Locator;
    emailInputField:        Locator; 
    passwordInputField:     Locator;
    signInButton:           Locator;

    constructor(page: Page){
        this.page = page;
        this.customerLoginHeader = page.locator("//span[@class='base']");
        this.emailInputField = page.locator("//input[@id='email']");
        this.passwordInputField = page.locator("//fieldset[@class='fieldset login']//input[@id='pass']");
        this.signInButton = page.locator("//fieldset[@class='fieldset login']//span[contains(text(),'Sign In')]");
    }
    
    async login(username: string, password: string) {
        try {
            await expect(this.emailInputField).toBeVisible();

            await this.emailInputField.fill(username);
            await this.passwordInputField.fill(password);
            await this.signInButton.click();
        } catch (error) {
            console.error("Failed to log in:", error);
            throw new Error(`login failed: ${error.message}`);
        }
    }
     
}