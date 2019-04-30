const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.cyipp.com')
    await page.pdf({path: 'cyipp.pdf', format: 'A4'})
    browser.close()
})()

