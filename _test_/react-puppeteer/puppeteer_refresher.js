const puppeteer = require("puppeteer");

//asynchronous IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 70,
  });

  const page = await browser.newPage();

  // goto the new page

  await page.goto("https://google.com");

  // variables
  // const searchSelector = 'input[title="Search"]';
  // const restaurantSelector = '.rllt__details [role="heading"] span';

  // await page.waitForSelector(searchSelector);

  // await page.click(searchSelector, { clickCount: 1 });

  // await page.type(searchSelector, "Pizza restaurants");

  // await page.keyboard.press("Enter");

  // await page.waitForSelector(restaurantSelector);

  // // go ahead and scrape

  // const titles = await page.evaluate((rs) => {
  //   const restaurantTitlesSpanTag = document.querySelectorAll(rs); //DOM
  //   const restaurantTitles = [...restaurantTitlesSpanTag].map(
  //     (el) => el.textContent
  //   );
  //   return restaurantTitles;
  // }, restaurantSelector);

  // console.log(titles);
  // console.log("done with automation");
})();
