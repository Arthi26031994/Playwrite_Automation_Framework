import { Given, When, Then,setDefaultTimeout } from "@cucumber/cucumber";
import { Browser,BrowserContext,chromium,Page } from "playwright";
import { page} from "../CommonMethods/BasePage"  
import { expect } from "playwright/test";
import dotenv from "dotenv"
import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";
dotenv.config();
setDefaultTimeout(1000*60*2);
Given('Login into application', async function () {
try{
await page.goto(process.env.url!);
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
