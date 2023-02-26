//imports ---------------------------------------------------->
const puppeteer = require("puppeteer");
const { extract } = require("@extractus/article-extractor");
var Scraper = require("images-scraper");
const googleIt = require("google-it");

//------------------------------------------------------------>
exports.imageScraper = async (searchQuery) => {
  const google = new Scraper();
  const results = await google.scrape(searchQuery, 5);
  return results;
};

//------------------------------------------------------------>
exports.articleScraper = async (links) => {
  const articlePromises = [];
  for (let i = 0; i < links.length; i++) {
    const article = extract(links[i]);
    articlePromises.push(article);
  }
  const articles = await Promise.all(articlePromises);

  return articles;
};

//------------------------------------------------------------>
exports.googleLinkScraper = async (searchQuery, getOnlyLink = true) => {
  let results = await googleIt({ query: `${searchQuery}` });
  if (getOnlyLink) {
    results = results.map((result) => {
      return result.link;
    });
  }
  return results;
};

function getDomain(url) {
  var domain;
  //find & remove protocol (http, ftp, etc.) and get domain
  if (url.indexOf("://") > -1) {
    domain = url.split("/")[2];
  } else {
    domain = url.split("/")[0];
  }
  return domain;
}

//------------------------------------------------------------>
exports.puppeteerImage = async (link) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);

  await page.goto(link);
  await page.screenshot({ path: `./temp/img/${getDomain(link)}.png` });

  await browser.close();
};

//------------------------------------------------------------>
exports.puppeteerPDF = async (link) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);

  await page.goto(link, {
    waitUntil: "networkidle2",
  });
  await page.pdf({ path: `./temp/pdf/${getDomain(link)}.pdf`, format: "a4" });

  await browser.close();
};
