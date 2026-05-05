import {test} from "@playwright/test"

// test.describe.configure({mode: 'serial'})
// test.describe.configure({mode: 'parallel'})

// command to run test in specific browser
// npx playwright test tests/paralleltesting.spec.ts --project chromium
// npx playwright test tests/paralleltesting.spec.ts --project firefox
// npx playwright test tests/paralleltesting.spec.ts --project webkit



// command to specify the number of workers
//npx playwright test tests/paralleltesting.spec.ts --workers 4  
                        //OR
//npx playwright test tests/paralleltesting.spec.ts --workers=4  




test.describe('group1', () => {

    test('Test1', async ({page}) => {
        console.log("This is Test1...........");
    })

    test('Test2', async ({page}) => {
        console.log("This is Test2...........");
    })

    test('Test3', async ({page}) => {
        console.log("This is Test3...........");
    })

    test('Test4', async ({page}) => {
        console.log("This is Test4...........");
    })

    test('Test5', async ({page}) => {
        console.log("This is Test5...........");
    })
});