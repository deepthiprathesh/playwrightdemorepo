import { test, expect } from '@playwright/test';

test('storage test',async ({ browser }) => {

    const context = await browser.newContext({
        storageState: "./auth.json"
    })
    const page = await context.newPage();
    await page.goto("/login")
    await page.waitForTimeout(5000);
})


test('storage test2',async ({ browser }) => {

    const context = await browser.newContext({
        storageState: "./auth.json"
    })
    const page = await context.newPage();
    await page.goto("/login")
})