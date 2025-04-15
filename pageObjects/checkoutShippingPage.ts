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
        try {
            await this.shipBestWayButton.waitFor({ state: 'visible' });
            await this.shipBestWayButton.click();
            await this.nextButton.click();
            await this.page.waitForLoadState('networkidle');
        } catch (error) {
            throw new Error(`Failed to select the 'Best Way' shipping option: ${error.message}`);
        }
    }

    async shippingFlatRateOption() {
        try {
            await this.shipFlatRateButton.waitFor({ state: 'visible' });
            await this.shipFlatRateButton.click();
            await this.nextButton.click();
            await this.page.waitForLoadState('networkidle');
        } catch (error) {
            throw new Error(`Failed to select the 'Flat Rate' shipping option: ${error.message}`);
        }
    }

 
     
}