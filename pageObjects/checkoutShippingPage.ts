import {Locator, Page} from '@playwright/test';
import { customers } from '../customerDetails';

export class CheckoutShippingPage{
   
    page:                   Page;
    header:                 Locator;
    shipBestWayButton:      Locator;
    shipFlatRateButton:     Locator;
    nextButton:             Locator;
    

    constructor(page: Page){
        this.page = page;
        this.header = page.locator("//div[normalize-space()='Shipping Address']");
        this.shipBestWayButton = page.locator("//input[@name='ko_unique_1']");
        this.shipFlatRateButton = page.locator("//input[@name='ko_unique_2']");
        this.nextButton = page.locator("//span[normalize-space()='Next']");       

    }
    
    async shippingBestWayOption() {
        this.shipBestWayButton.click();
        this.nextButton.click();
        await this.page.waitForLoadState('networkidle');

    }
    async shippingFlatRateOption() {
        this.shipFlatRateButton.click();
        this.nextButton.click();
        await this.page.waitForLoadState('networkidle');
    }

 
     
}