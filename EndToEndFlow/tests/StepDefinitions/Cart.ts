import { Given, When, Then,setDefaultTimeout } from "@cucumber/cucumber";
import { Browser,BrowserContext,chromium,Page } from "playwright";
import { page} from "../CommonMethods/BasePage"  
import { expect } from "playwright/test";
import {  NavigateToPage } from "../CommonMethods/BasePage";
import {  SoftAssetValues } from "../CommonMethods/BasePage";
import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";

Then('I Navigate to {string} page',async function (cartPage) {
  try{
   await NavigateToPage(cartPage);
  }
  catch(error)
  {
      console.error('error launching the application', error);  
         allure.attachmentPath("Screenshot", "C:\\Users\\MSUSERSL123\\Desktop\\playwrite_automation\\allure-results", {
          contentType: ContentType.PNG,
          fileExtension: "png",
        });
      }
  
});


Then('I verify {string} is properly added to the cart', async function (product) {
 try{
 var locator = "xpath=//td[@class='cart_description']//a";
 await SoftAssetValues(locator, product);
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