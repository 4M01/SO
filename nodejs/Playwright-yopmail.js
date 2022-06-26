const { chromium } = require('/node_modules/@playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://yopmail.com/?test_for_playwright
  await page.goto('https://yopmail.com/?test_for_playwright');
  // Go to https://yopmail.com/en/
  await page.goto('https://yopmail.com/en/');
  // Go to https://yopmail.com/en/wm
  await page.goto('https://yopmail.com/en/wm');
  // ---------------------
  await context.close();
  await browser.close();
})();