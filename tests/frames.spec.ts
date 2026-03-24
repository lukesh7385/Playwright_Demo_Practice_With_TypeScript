/* 
An iframe (short for "inline frame") is an HTML element that allows you to embed another HTML document within the current document.
Iframes are commonly used to embed external content such as videos, maps, or other web pages (as seen here) into a web page without affecting the parent document.
*/

import {test, expect, Locator} from "@playwright/test";

test("frames demo", async ({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    // Total number of frames present on the page.
    const frames = page.frames();
    console.log("Number of frames:", frames.length);

    /* 
    //------ Approach 1: using page.frame() -----
    const frame = page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1.html"});

    if(frame)
    {
        await frame.locator("[name = 'mytext1']").fill("Hello!");
        // await frame.fill("[name = 'mytext1']", "Hello");
    }
    else{
        console.log("Frame is not available");
    }

    */
   
   
   
   // --------- Approach 2: using frameLocator() -----------
   const inputBox: Locator = page.frameLocator('[src="frame_1.html"]').locator('[name="mytext1"]');
   await inputBox.fill("Hello!");
   await page.waitForTimeout(5000);
    
});




test.only("Inner/Child frames demo", async ({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame3 = page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"});

    if(frame3)
    {
        await frame3.locator("[name = 'mytext3']").fill("Welcome");
        const childFrames = frame3.childFrames();
        console.log("Child frames inside the frame 3:", childFrames.length); // only one child frame exist
        const radio = childFrames[0].getByLabel("I am a human");
        await radio.check(); // select radio button
        await expect(radio).toBeChecked(); // assertion
    }
    else{
        console.log("Frame 3 is not found..");
    }
    await page.waitForTimeout(5000);


    // Assignment 
    // url: https://ui.vision/demo/webtest/frames/
    // try to interact with all the frames
});

