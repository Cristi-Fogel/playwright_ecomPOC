import {Locator, Page} from '@playwright/test';

export class GeneralObjects{
    page:                       Page;
    SearchFieldInput:           Locator;
    SearchFieldButton:          Locator; 
    passwordInputField:         Locator;
    signInButton:               Locator;
    cartProductNumber:          Locator;
    proceedToCheckoutButton:    Locator;

    constructor(page: Page){
        this.page = page;
        this.SearchFieldInput = page.locator("//input[@id='search']");
        this.SearchFieldButton = page.locator("//input[@id='search']");
        this.cartProductNumber = page.locator("//span[@class='counter-number']")
        this.proceedToCheckoutButton = page.locator("//button[@id='top-cart-btn-checkout']");
    }
    
    async searchProduct(product: string) {
        await this.SearchFieldInput.fill(product);
        await this.page.keyboard.press('Enter');
        // await this.SearchFieldButton.click();
    }

    async goToCheckout(){
        await this.cartProductNumber.click();
        await this.proceedToCheckoutButton.click();
    }
     
}