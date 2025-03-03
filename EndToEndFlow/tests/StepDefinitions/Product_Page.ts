import { Given, When, Then,setDefaultTimeout } from "@cucumber/cucumber";
import { Browser,BrowserContext,chromium,Page } from "playwright";
import { page} from "../CommonMethods/BasePage"  
import { expect } from "playwright/test";
import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";

When('I Search for the product {string}', async function (searchKeyword) {
    try{
    await expect(page.getByText('Products')).toBeVisible();
    await page.getByText("Products").click();
    await page.locator("#search_product").fill(searchKeyword);
    await page.locator("#submit_search").click()
}
catch(error)
{
    console.error('error launching the application', error);  
      await allure.attachmentPath("Screenshot", "C:\\Users\\MSUSERSL123\\Desktop\\playwrite_automation\\allure-results", {
        contentType: ContentType.PNG,
        fileExtension: "png",
      });
    }
});


When('I add first product to the cart', async function () {
    try{
    await page.locator("xpath=(//p//following-sibling::a[@data-product-id='1'][@class='btn btn-default add-to-cart'])[1]").click();
    await page.getByRole('button',{ name : 'Continue Shopping'}).click();
    }
    catch(error)
    {
     console.error('error launching the application', error);  
      await allure.attachmentPath("Screenshot", "C:\\Users\\MSUSERSL123\\Desktop\\playwrite_automation\\allure-results", {
      contentType: ContentType.PNG,
      fileExtension: "png",
      });
    }
});


