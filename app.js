//imports ----------------------------------------------------->
const express = require("express");
const cors = require("cors");
const compression = require("compression");


const request = require('request');
const cheerio = require('cheerio');

const searchQuery = 'define ece';
const numLinksToScrape = 3;

// URL encode the search query and concatenate with Google search URL
const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchQuery);

// Send a GET request to Google search URL
request(searchUrl, (error, response, html) => {
  if (!error && response.statusCode === 200) {
    // Load the HTML response into Cheerio
    const $ = cheerio.load(html);

    // Extract the links from search results
    const links = $('a');

    console.log(links.length)

    let validLinks= []

    for(let link of links){
        if(link.attribs.href.startsWith('/url?q=')){
            validLinks.push(link.attribs.href.split('&')[0].replace('/url?q=', ''))
        }
    }
    console.log(validLinks)


  } else {
    console.error('Error scraping Google search results:', error);
  }
});



//initialize app ---------------------------------------------->
const app = express();

//middleware -------------------------------------------------->
app.use(express.json());
app.use(compression());
app.use(
    cors({
        origin: "*",
    })
);


app.use(express.static("public"));



//Export app -------------------------------------------------->
module.exports = app;
