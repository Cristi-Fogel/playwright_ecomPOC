import {Locator, Page} from '@playwright/test';

export class HomePage{
    page:           Page;
    signInButton:   Locator;
    loginMessageOk: Locator;
    header:         Locator;

    constructor(page: Page){
        this.page = page;
        this.signInButton = page.locator("//div[@class='panel header']//a[contains(text(),'Sign In')]");
        this.header = page.locator(".base");
    }
}