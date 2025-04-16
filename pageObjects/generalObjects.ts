import {expect, Locator, Page} from '@playwright/test';

export class GeneralObjects{
    page:                       Page;
    searchFieldInput:           Locator;
    searchFieldButton:        Locator;
    passwordInputField:         Locator;
    signInButton:               Locator;
    cartProductNumber:          Locator;
    proceedToCheckoutButton:    Locator;

    constructor(page: Page){
        this.page = page;
        this.searchFieldInput = page.locator("//input[@id='search']");
        this.searchFieldButton = page.locator("//button[@title='Search']"); //becomes enabled only after data is input
        this.cartProductNumber = page.locator("//span[@class='counter-number']")
        this.proceedToCheckoutButton = page.locator("//button[@id='top-cart-btn-checkout']");
    }
    
    async searchProduct(product: string) {
        try {
            await this.searchFieldInput.fill(product);
            await this.page.keyboard.press('Enter');
        } catch (error) {
            console.error(`[searchProduct] Error occurred while searching for product "${product}":`, error);
            throw error; // Re-throw the error after logging it
        }
    }

    async searchProductClick(product: string) {
        try {
            await this.searchFieldInput.fill(product);
            await this.searchFieldButton.click();
        } catch (error) {
            console.error(`[searchProductClick] Error occurred while searching for product "${product}":`, error);
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