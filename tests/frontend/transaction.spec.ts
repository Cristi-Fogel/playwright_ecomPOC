import { customers } from '../../customerDetails';
import { CheckoutReviewPaymentsPage } from '../../pageObjects/checkoutReviewPaymentsPage';
import { CheckoutShippingPage } from '../../pageObjects/checkoutShippingPage';
import { loginAsCustomer, waitForHomePage } from '../../utils/testHelpers';
import { ProductsPage } from '../../pageObjects/productsPage';
import { ProductPage } from '../../pageObjects/productPage';
import { test, expect } from '@playwright/test';
import { overallStrings } from '../../overallStrings';
import { GeneralObjects } from '../../pageObjects/generalObjects';
import { validationStrings } from '../../validationStrings';
import { CheckoutSuccessPage } from '../../pageObjects/checkoutSuccessPage';
 
test('eCom - Add Product - Customer Logged in', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const productPage = new ProductPage(page);
  const generalObjects = new GeneralObjects(page);
  const checkoutShippingPage = new CheckoutShippingPage(page);
  const checkoutReviewPaymentsPage = new CheckoutReviewPaymentsPage(page);
  const checkoutSuccessPage = new CheckoutSuccessPage(page);
  
  await loginAsCustomer(page);
  await generalObjects.searchProduct(overallStrings.products.product1);
  await productsPage.clickOnFirstProduct();
  await page.waitForLoadState('networkidle');
  await productPage.addProductToCartXsBlue(); 
  await page.waitForLoadState('networkidle'); 
  await page.waitForTimeout(5000);

  await generalObjects.goToCheckout();
  await checkoutShippingPage.shippingBestWayOption();

  expect(checkoutReviewPaymentsPage.billingAddressDetails).toContainText(customers.details.customer1.firstName);
  expect(checkoutReviewPaymentsPage.billingAddressDetails).toContainText(customers.details.customer1.lastName);
  expect(checkoutReviewPaymentsPage.billingAddressDetails).toContainText(customers.details.customer1.address);
  expect(checkoutReviewPaymentsPage.billingAddressDetails).toContainText(customers.details.customer1.city);
  expect(checkoutReviewPaymentsPage.billingAddressDetails).toContainText(customers.details.customer1.country + " " + customers.details.customer1.postalCode);
  expect(checkoutReviewPaymentsPage.billingAddressDetails).toContainText(customers.details.customer1.phoneNumber);
  expect(checkoutReviewPaymentsPage.billingAddressDetails).toContainText(customers.details.customer1.state);
  expect(checkoutReviewPaymentsPage.orderTotalValue).toContainText(validationStrings.transaction.cost);
  expect(checkoutReviewPaymentsPage.shipMethodValue).toContainText(validationStrings.transaction.shippingMethod.bestWay);
  expect(checkoutReviewPaymentsPage.cartSummaryItems).toContainText("1");

  await checkoutReviewPaymentsPage.placeOrderButton.click();
  await page.waitForLoadState('networkidle');
 
  expect(checkoutSuccessPage.header).toHaveText(validationStrings.transaction.checkout.checkout);
  await checkoutSuccessPage.continueShoppingButton.click();
  await waitForHomePage(page);
  
});
