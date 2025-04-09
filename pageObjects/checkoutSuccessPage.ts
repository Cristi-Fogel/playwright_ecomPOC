import {Locator, Page} from '@playwright/test';

export class CheckoutSuccessPage{
   
    page:                       Page;
    header:                     Locator;
    orderNumberValue:           Locator;
    continueShoppingButton:     Locator;
    orderTotalValue:            Locator; 

    constructor(page: Page){
        this.page = page;
        this.header = page.locator("//span[@class='base']");
        this.orderNumberValue = page.locator("a[class='order-number'] strong"); 
        this.continueShoppingButton = page.locator("a[class='action primary continue'] span");
    }
}