import {expect, Locator, Page} from '@playwright/test';

export class ProductPage{
   
    page:                   Page;
    productName:            Locator; 
    sizeXsButton:           Locator;
    colorblue:              Locator;
    addToCartButton:        Locator;
    invalidReturnMessage:   Locator;

    constructor(page: Page){
        this.page = page;
        this.productName = page.locator("//span[@class='base']"); 
        this.sizeXsButton = page.locator("#option-label-size-143-item-166");
        this.colorblue = page.locator("#option-label-color-93-item-50");
        this.addToCartButton = page.locator("//span[normalize-space()='Add to Cart']");
        this.invalidReturnMessage = page.locator("//div[@class='message notice']//div[1]");
    }
        async addProductToCartXsBlue() {
            await this.sizeXsButton.click();
            await this.colorblue.click(); 
            await this.addToCartButton.click();
        }
}
    