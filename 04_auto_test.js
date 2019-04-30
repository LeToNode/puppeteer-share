const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.npmjs.com')
    await page.type('#search > div > div > input','react')
    await page.click('#search > button')
    await page.waitForNavigation()
    await page.screenshot({path: 'npmjs.png'})
    browser.close()
})()
