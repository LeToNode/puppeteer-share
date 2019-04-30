const puppeteer = require('puppeteer')
const devices = require('puppeteer/DeviceDescriptors')
const iphone6 = devices['iPhone 6'];
(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.emulate(iphone6)
    await page.goto('https://www.baidu.com/')
    await page.screenshot({path: 'baidu-in-iphone6.png'})
    const host = await page.evaluate(() => location.host)
    console.log(host) // 'www.baidu.com'
    browser.close()
})()
