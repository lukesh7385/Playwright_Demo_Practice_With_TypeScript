import { test, expect } from "@playwright/test";


test.beforeAll('BeforeAll', async () => {
     console.log("This is before all......")
});

test.afterAll('AfterAll', async () => {
    console.log("This is after all......")
});



test.beforeEach('BeforEach', async () => {
    console.log("This is befor each.......")
});


test.afterEach('AfterEach', async () => {
    console.log("This is after each.......")
});





test("Test1", async () => {
    console.log("This is Test1.........")
});

test("Test2", async () => {
    console.log("This is Test2.........")
});

test("Test3", async () => {
    console.log("This is Test3.........")
});

test("Test4", async () => {
    console.log("This is Test4.........")
});




