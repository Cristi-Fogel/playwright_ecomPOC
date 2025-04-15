import { expect, Locator, Page } from '@playwright/test';

export class ProductsPage {
   
    page: Page;
    searchResultHeader: Locator;
    productList: Locator;
    firstProduct: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchResultHeader = page.locator("//span[@class='base']");
        this.productList = page.locator("ol.products.list.items.product-items");
        this.firstProduct = this.productList.locator("li").first(); // Define reusable locator for the first product
    }

    // Hover on the first product, with enhanced error handling
    async hoverOnFirstProduct() {
        try {
            await this.firstProduct.waitFor({ state: 'visible' }); // Ensure it's visible before hovering
            await this.firstProduct.hover();
        } catch (error) {
            console.error("[hoverOnFirstProduct] Failed to hover on the first product:", error);
            throw new Error(`Hover action failed: ${error.message}`);
        }
    }

    // Click on the first product, ensuring visibility and better error handling
    async clickOnFirstProduct() {
        try {
            await this.firstProduct.waitFor({ state: 'visible' }); // Ensure it's visible before clicking
            await expect(this.firstProduct).toBeVisible(); // Validate visibility explicitly
            await this.firstProduct.click();
        } catch (error) {
            console.error("[clickOnFirstProduct] Failed to click on the first product:", error);
            throw new Error(`Click action failed: ${error.message}`);
        }
    }
}
