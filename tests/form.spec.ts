import { test, expect } from '@playwright/test';

test('フォームの操作テスト', async ({ page }) => {
    await page.route('/api/shuffle', async route => {
        const json = [ { members: ['baz', 'bar', 'foo'] }]
        await route.fulfill({json})
    })
  
    await page.goto('http://localhost:3000/form');
    await page.getByRole('textbox', { name: /1人目/ }).fill('foo');
    await page.getByRole('textbox', { name: /2人目/ }).fill('bar');
    await page.getByRole('button', { name: /シャッフル/ }).click();
    await expect(page.getByRole('status', {name: /結果/})).toHaveText(/(foo→bar)|(bar→foo)/)
});
