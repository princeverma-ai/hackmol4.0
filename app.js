//imports ----------------------------------------------------->
const express = require("express");
const dataScraper = require("./dataScraper");

//initialize app ---------------------------------------------->
const app = express();

//middleware -------------------------------------------------->
app.use(express.json());
app.use(express.static("public"));

const searchQuery = "nebula meaning";

function filterLinks(links) {
  //filter link if its conatins pdf
  const filteredLinks = links.filter((link) => {
    return !link.includes(".pdf");
  });
  return filteredLinks;
}
const getData = async (searchQuery) => {
  try {
    let links = await dataScraper.googleLinkScraper(searchQuery);
    console.log(links);
    const articles = await dataScraper.articleScraper(links.slice(0, 3));
    console.log(articles);
    const images = await dataScraper.imageScraper(searchQuery);
    console.log(images);

    links = filterLinks(links).slice(0, 3);
    await Promise.all(links.map((link) => dataScraper.puppeteerImage(link)));
    await Promise.all(links.map((link) => dataScraper.puppeteerPDF(link)));

    return links;
  } catch (err) {
    console.log(err);
  }
};

getData(searchQuery)
  .then((result) => {
    console.log("DONE");
  })
  .catch((err) => {
    console.log(err);
  });

//Export app -------------------------------------------------->
module.exports = app;
