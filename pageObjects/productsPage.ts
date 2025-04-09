import {Locator, Page} from '@playwright/test';

export class ProductsPage{
   
    page:                   Page;
    searchResultHeader:     Locator;
    productList:            Locator; 
    

    constructor(page: Page){
        this.page = page;
        this.searchResultHeader = page.locator("//span[@class='base']");
        this.productList = page.locator("ol.products.list.items.product-items"); 
    
         
    }
    
    async hoverOnFirstProduct() {
        const firstProduct = this.productList.locator("li").first(); 
        await firstProduct.hover(); 
        await firstProduct.click();
    }
    async clickOnFirstProduct() {
        const firstProduct = this.productList.locator("li").first(); 
        await firstProduct.hover(); 
        await firstProduct.click();
    }


     
}