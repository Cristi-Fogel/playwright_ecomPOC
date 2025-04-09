import { expect, Page } from '@playwright/test';
import { LoginPage } from '../pageObjects/loginPage';
import { CustomerAccountPage } from '../pageObjects/customerAccountPage';
import { GeneralObjects } from '../pageObjects/generalObjects';
import { navigateTo, waitForElement } from './pageUtils';
import { getURL } from './urlBuilder';
import { customers } from '../customerDetails';
import { HomePage } from '../pageObjects/homePage';
import { baseURLs, paths } from '../config';  

 
export async function loginAsCustomer(page: Page) {
  const loginPage = new LoginPage(page);
  const customerAccountPage = new CustomerAccountPage(page);

  await navigateTo(page, getURL("ecomURL", "customerLoginPage"));
  await page.waitForLoadState('networkidle');
  await loginPage.login(customers.details.customer1.email, customers.details.customer1.password);
  await waitForElement(page, customerAccountPage.changePasswordButton);
}

export async function waitForHomePage(page: Page){
  const homePage = new HomePage(page);

    await page.waitForLoadState('networkidle');
    // expect(homePage.header).toContainText("Home Page"); 
    expect(page.url()).toBe(baseURLs.ecomURL + paths.home);
  
}