/* 
css (Cascading Style Sheets)

html + js + css

2 Type of css locators:

1) absolute css locators

Example1: html>body>div>div>div>main>div>div>p[id = 'para1'][class = 'main']
Example2: body>div>div>div>main>div>*:nth-child(5)>p[id = 'para1']
Example3: body>div>div>div>main>div>*:nth-child(5)>p#para1


2) relative css locators

1) tag with id                     tag#id   or   #id
2) tag with class                  tag.class or  .class
3) tag with any other attribute    tag[attribute = value]  or [attribute = value]
4) tag with class and attribute    tag.class[attribute = value]  or class.[attribute = value]


page.locator(css/xpath)

*/

import {test, expect, Locator} from "@playwright/test";

test("Verify css locators", async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    // 1. tag with id  - tag#id

    // const serchBox: Locator = page.locator("input#small-searchterms");
    // await serchBox.fill("T-Shirts");

    //await expect(page.locator("input#small-searchterms")).toBeVisible();
    // await page.locator("input#small-searchterms").fill("T-Shirts");
    //await page.locator("#small-searchterms").fill("T-Shirts");



    // 2. tag with class - tag.class

    // await expect(page.locator("input.search-box-text ")).toBeVisible();
    // await page.locator("input.search-box-text").fill("T-Shirts");
    // await page.locator(".search-box-text").fill("T-Shirts");



    // 3. tag with any other attribute - tag[attribute = value]

    // await page.locator("input[name ='q']").fill("T-Shirts")
    // await page.locator("[name ='q']").fill("T-Shirts")



    // 4. tag with class and attribute -  tag.class[attribute = value]

    // await page.locator("input.search-box-text[name = 'q']").fill("T-Shirts")
    await page.locator(".search-box-text[name = 'q']").fill("T-Shirts")
    await page.waitForTimeout(5000);




    // p[class ^= 'ma'] ----   ^  represent start with
    // p[id $= 'a1']     ----  $  represent end with
    // p[class *= 'ain'] ----  *  represent contains 

    // :not ---(not operator)
    // p[id = 'para1']:not([class = 'mainn']) - first one valid second one invalid
    // p:not([id = 'para11'])[class = 'main'] -- first one invalid second one valid
    // p:not([id = 'para1']):not([class = 'main']) -- negation (appart from this) or (other than this)

    // + operator is represent Sibling
    // p[id = 'para1'] + p              - it will give the immediate sibling 
    // p[id = 'para1'] +*               - it will give the all the siblings  




})