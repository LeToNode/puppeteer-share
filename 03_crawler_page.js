const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://search.jd.com/Search?keyword=洛神山庄&enc=utf-8')
    const goodIds = await page.evaluate(
        () =>{
            var nodes = document.querySelectorAll('.gl-item');
            return [...nodes].map(el => el.getAttribute('data-sku'));
        }
    )
    console.log(goodIds)
    browser.close()
})()
