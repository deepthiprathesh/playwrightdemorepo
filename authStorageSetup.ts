import { BrowserContext } from '@playwright/test';

let sharedContext: BrowserContext | undefined;

export const getContext = async ({ browser }) => {
    // Check if the context is already created
    if (!sharedContext) {
        sharedContext = await browser.newContext({
            storageState: './auth.json'
        });
    }
};

export const setSharedContext = () => {
    if (!sharedContext) {
        throw new Error('Context is undefined. Make sure the setupContext function is executed successfully.');
    }
    return sharedContext;
};
