const playwright = require('playwright');

async function main() 
{
    const browser = await playwright.chromium.launch({
        headless: false
    });

    const mailPage = await browser.newPage();

    await mailPage.goto("https://yopmail.com?test_for_playwright");
    await mailPage.click("text=Allow all cookies and continue");
                    
    await mailPage.waitForTimeout(3000);

    
    //do not work (empty result)
    console.log(await mailPage.$('text=/^\\d{6} code$/'));

    await mailPage.close();
    await browser.close();
}

main();