import {Locator, Page} from '@playwright/test';

export class CheckoutReviewPaymentsPage{
   
    page:                   Page;
    header:                 Locator;
    billingAddressDetails:  Locator;
    placeOrderButton:       Locator;
    orderTotalValue:        Locator;
    itemsInCartValue:       Locator;
    shipToContent:          Locator;
    shipMethodValue:        Locator;
    cartSummaryItems:       Locator; //using it for the counter validation

    constructor(page: Page){
        this.page = page;
        this.header = page.locator("//div[normalize-space()='Payment Method']");
        this.billingAddressDetails = page.locator("//div[@class='billing-address-details']");
        this.placeOrderButton = page.locator("//span[normalize-space()='Place Order']");
        this.orderTotalValue = page.locator("strong span[class='price']");
        this.itemsInCartValue = page.locator("span[data-bind='text: getCartSummaryItemsCount()']")
        this.shipToContent = page.locator("//div[@class='ship-to']//div[@class='shipping-information-content']");
        this.shipMethodValue = page.locator("div[class='shipping-information-content'] span[class='value']");
        this.cartSummaryItems = page.locator("//span[@data-bind='text: getCartSummaryItemsCount()']");
    }

}