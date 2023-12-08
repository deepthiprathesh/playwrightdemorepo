import { test } from '@playwright/test';
import { setContext, getSharedContext } from '../authStorageSetup' ;

test.beforeEach(async ({ browser }) => {
    await setContext({ browser });
});

test('storage test1', async () => {
    const context = getSharedContext();
    const page = await context.newPage();
    await page.goto('/login');
    await page.getByRole('link', { name: 'New', exact: true }).click();
    await page.getByLabel('Page context').getByText('New repository').click();
    await page.getByLabel('Pull requests', { exact: true }).click();
});

test('storage test2', async () => {
    const context = getSharedContext();
    const page = await context.newPage();
    await page.goto('/login');
    
});