import {expect, Locator, Page} from '@playwright/test';

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
        try {
            await this.SearchFieldInput.fill(product);
            await this.page.keyboard.press('Enter');
        } catch (error) {
            console.error(`[searchProduct] Error occurred while searching for product "${product}":`, error);
            throw error; // Re-throw the error after logging it
        }
    }

    async goToCheckout(){
        try{ 
           await expect(this.cartProductNumber).toBeVisible();
           await this.cartProductNumber.click();
           await this.proceedToCheckoutButton.click();
        } catch (error) {
            console.error("[goToCheckout] Error occurred during checkout process:", error);
            throw error; // Re-throw the error after logging it
        }
    }
     
}