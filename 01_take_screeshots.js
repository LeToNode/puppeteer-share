const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({width: 1920, height: 1080})
    await page.goto('https://www.cyipp.com/')
    await page.screenshot({
        path: 'cyipp.png',
        fullPage: true
    })
    browser.close()
})()
