import { ProductPage } from '../../pageObjects/productPage';
import { test, expect } from '@playwright/test';
import { overallStrings } from '../../overallStrings';
import { GeneralObjects } from '../../pageObjects/generalObjects';
import { validationStrings } from '../../validationStrings';
import { navigateTo } from '../../utils/pageUtils';
import { getURL } from '../../utils/urlBuilder';
import { waitForHomePage } from '../../utils/testHelpers';
 
test('eCom - Search Product - invalid returns message validation - product not existing', async ({ page }) => {
  const productPage = new ProductPage(page);
  const generalObjects = new GeneralObjects(page); 
  
  await navigateTo(page, getURL("ecomURL", "home"));
  await page.waitForLoadState('networkidle');
  await generalObjects.searchProduct(overallStrings.products.invalid);
  await expect(productPage.invalidReturnMessage).toContainText(validationStrings.searchResults.noResult);
});


// this test will fail (fix needed on website)
test('eCom - Search Product - invalid returns message validation - long string', async ({ page }) => {
  const productPage = new ProductPage(page);
  const generalObjects = new GeneralObjects(page); 
  
  await navigateTo(page, getURL("ecomURL", "home"));
  await page.waitForLoadState('networkidle');
  await generalObjects.searchProduct(overallStrings.products.longString);
  await expect(productPage.invalidReturnMessage).toContainText(validationStrings.searchResults.noResult);
});

test('eCom - Search Product - invalid returns message validation - empty string', async ({ page }) => {
  const productPage = new ProductPage(page);
  const generalObjects = new GeneralObjects(page); 
  
  await navigateTo(page, getURL("ecomURL", "home"));
  await page.waitForLoadState('networkidle');
  await generalObjects.searchProduct(overallStrings.products.emptyString);
  await waitForHomePage(page);
});
