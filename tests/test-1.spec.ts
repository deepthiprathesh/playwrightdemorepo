import { test, expect } from '@playwright/test';

test('test', async ({ page, request }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('deepthipratesh');
  await page.getByLabel('Username or email address').press('Tab');
  await page.getByLabel('Password').fill('playwright@23');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('deepthiprathesh');
  await page.getByLabel('Username or email address').press('Tab');
  await page.getByLabel('Password').fill('playwright@23');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByRole('link', { name: 'New', exact: true }).click();
  await page.getByLabel('Page context').getByText('New repository').click();
  await page.getByLabel('Pull requests', { exact: true }).click();
});