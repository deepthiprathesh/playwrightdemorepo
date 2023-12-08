import { test, expect } from '@playwright/test';

let sharedContext; // Declare the context variable outside of the test functions

// The beforeEach hook runs before each test
test.beforeEach(async ({ browser }) => {
    // Check if the context is already created
    if (!sharedContext) {
        sharedContext = await browser.newContext({
            storageState: './auth.json'
        });
    }
});

test('storage test122', async () => {
    // Ensure the context is defined before using it
    if (!sharedContext) {
        throw new Error('Context is undefined. Make sure the beforeEach hook is executed successfully.');
    }

    const page = await sharedContext.newPage();
    await page.goto('/login');
    await page.waitForTimeout(5000);
});

test('storage test222', async () => {
    // Ensure the context is defined before using it
    if (!sharedContext) {
        throw new Error('Context is undefined. Make sure the beforeEach hook is executed successfully.');
    }

    const page = await sharedContext.newPage();
    await page.goto('/login');
    // Perform additional test steps as needed
});