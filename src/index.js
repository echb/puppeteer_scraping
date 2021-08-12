const puppeteer = require('puppeteer');

async function scrapeWeb() {
  const state = {
    counter: 0
  }

  console.time()
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const Search_Text = 'jbl live 650btnc'
  const Button_Click = '#nav-search-submit-button'
  const bringWeb = 'https://www.amazon.com.mx/'

  await page.goto(bringWeb);
  await page.click('#twotabsearchtextbox')
  await page.type('#twotabsearchtextbox', Search_Text)
  await page.click(Button_Click)
  await page.waitForTimeout(1000)


  // console.timeEnd()
  await browser.close();
  // console.log(a, state);
  // retu
}
scrapeWeb()

// const state = {
//   counter: 0
// }

// export default {
//   state
// }
// module.exports = {
//   scrapeWeb
// }

