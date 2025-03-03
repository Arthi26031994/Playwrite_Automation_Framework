import { Given, When, Then,setDefaultTimeout, Before, After, } from "@cucumber/cucumber";
import { Browser,BrowserContext,chromium,Page } from "playwright";
import {  expect } from "playwright/test";
import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";
import dotenv from "dotenv"
import { text } from "stream/consumers";
import playwrightConfig from "../../../playwright.config";
let browser:Browser;
let page:Page;
let bcontext;
dotenv.config();
let browserType = process.env.chrome; 

Before(async function () {
   
    browser = await chromium.launch({ ignoreDefaultArgs: ['--disable-extensions'], channel: browserType, headless: false,args: ["--start-maximized"], executablePath :'C:/Program Files/Google/Chrome/Application/chrome.exe'});
   //let bcontext:BrowserContext = await browser.newContext();
   page = await browser.newPage();
  });

  export async function NavigateToPage ( pageName:string) {
    try{
     await page.locator("xpath=//a[contains(text(),'"+pageName+"')]").click();
    }
    catch(error)
    {
        console.error('error launching the application', error);  
           allure.attachmentPath("Screenshot", "C:\\Users\\MSUSERSL123\\Desktop\\playwrite_automation\\allure-results", {
            contentType: ContentType.PNG,
            fileExtension: "png",
          });
        }
  };

  export async function SoftAssetValues (locator:any, expectedValue:string) {
  try{
    const softExpect = expect.configure({ soft: true });
    var actualValue = await page.locator(locator).innerText();
    await softExpect(actualValue).toMatch(expectedValue);
  }
    catch(error)
    {
        console.error('error launching the application', error);  
          await allure.attachmentPath("Screenshot", "C:\\Users\\MSUSERSL123\\Desktop\\playwrite_automation\\allure-results", {
            contentType: ContentType.PNG,
            fileExtension: "png",
          });
        }
  };
  

  After(async function () {
    {
        await page.close()
        await browser.close()
    }
  })
  // test.afterEach(async() =>{
  //   await page.screenshot({path: Date.now() + 'Screenshot1.png', fullPage: true})
  // })

  export {page};
