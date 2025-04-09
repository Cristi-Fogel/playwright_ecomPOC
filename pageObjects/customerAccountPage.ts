import {Locator, Page} from '@playwright/test';

export class CustomerAccountPage{
    page:                   Page;
    customerLoginHeader:    Locator;
    changePasswordButton:   Locator;

    constructor(page: Page){
        this.page = page;
        this.customerLoginHeader = page.locator("//span[@class='base']");
        this.changePasswordButton = page.locator("//a[@class='action change-password']")
    }  
}