const dataScraper = require("./../dataScraper");
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

exports.searchController = async (req, res) => {
  const searchQuery = req.body.searchInput;
  // //Top google links ------------------------------------------>
  let links = await dataScraper.googleLinkScraper(searchQuery);
  const articles = await dataScraper.articleScraper(links.slice(0, 3));

  const images = await dataScraper.imageScraper(searchQuery);
  console.log(images);

  let imageString = "";
  images.forEach((element) => {
    imageString += `<div class="image-item">
        <img  src="${element.url}" alt="Image 4">
    </div>`;
  });
  const researchPapers = await dataScraper.googleLinkScraper(
    searchQuery + " research paper filetype:pdf"
  );

  const pdf = await dataScraper.googleLinkScraper(searchQuery + "filetype:pdf");

  let pdfString = "";
  pdf.forEach((element) => {
    pdfString += `<a href="${element}" class="card-link">${getDomain(
      element
    )}</a>`;
  });
  let rersearchString = "";
  researchPapers.forEach((element) => {
    rersearchString += `<a href="${element}" class="card-link">${getDomain(
      element
    )}</a>`;
  });
  let youtubeLinks = await dataScraper.googleLinkScraper(
    searchQuery + " youtube",
    false
  );
  let youtubeString = "";
  youtubeLinks.forEach((element) => {
    youtubeString += `
    
        <iframe width="150" height="150" src="${element.link.replace(
          "watch?v=",
          "embed/"
        )}"")}"
        title="${element.title}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <div class="box" style="float: right; height: 150px; width: 78%; margin-top: 3px; ;">
        <p> ${element.title}</p>
    </div>`;
  });

  let articleString = "";
  for (let i = 1; i < articles.length; i++) {
    articleString += `<img src="${articles[i].image}" alt="loading" style="width: 170px; height: 170px; float: right;">
      <div class="box">
          <strong><h3>${articles[i].source}</h3></strong>
          <p>
             ${articles[i].content}
          </p>
      </div> `;
  }

  res.status(200).send(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Search Results</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  
  </head>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <style>
      @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
  
  
      a {
          color: black;
      }
  
      .card {
          border: none;
          border-radius: 20px;
          background-color: white;
      }
      body{
          background-color: #edf2f4;
      }
  
      .image-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          float: right;
          margin-top: 26px;
          margin-right: 20px;
      }
  
      .image-item img {
          width: 400px;
          height: 300px;
      }
  
      .box {
          width: 75%;
          height: 70%;
          background-color: white;
          padding: 4px;
          margin: 6px;
      }
  </style>
  
  <body>
  
      <nav class="navbar navbar-expand-lg bg-body-tertiary" style="font-family: 'Rubik', sans-serif; font-size: 25px;">
          <div class="container-fluid">
              <a class="navbar-brand" href="#" style="font-weight: bold; font-size: 38px;">Web Scrapper</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="./history.html">History</a>
                      </li>
                  </ul>
                  <form class="d-flex" role="search" action="./search.html" id="formSubmit">
                      <input class="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search"
                          style="font-family: 'Merriweather', serif;">
                      <button class="btn btn-outline-secondary" type="submit" id="button-addon2"><i
                              class="material-icons">search</i></button>
                  </form>
              </div>
          </div>
      </nav>
  
      <div class="col-8" style="display: inline-block;">
          <div class="card mx-2 mb-2 mt-4 pt-3 "
              style="width: 65rem;  min-height: 300px; max-height: max-content;  ">
              <div class="card-body">
                  <h5 class="card-title" style=" font-family: 'Merriweather', serif; font-size: 36px;">Best
                      Results</h5>
                  <p class="card-text mt-3" style="font-family: 'Merriweather', serif;">${
                    articles[0].content
                  }</p>
                  <h5 class="card-title" style=" font-family: 'Merriweather', serif; font-size: 36px;">Top 3 LINKS----------------------></h5>
                  <div class="row" >
                  <strong>
                      <a href="${
                        links[0]
                      }" class="card-link" style="margin-left:10px;">${getDomain(
    links[0]
  )}</a>
                      <a href="${links[1]}" class="card-link">${getDomain(
    links[1]
  )}</a>
                      <a href="${links[2]}" class="card-link">${getDomain(
    links[2]
  )}</a></strong>
                  </div>
              </div>
          </div>
  
      </div>
      <div class="image-grid">
          ${imageString}
          
      </div>
  
     
      <div class="row">
          <div class="card mx-2 ml-2 mt-2 py-3" style="width: 32rem; max-width:max-content ">
              <div class="card-body">
                  <h5 class="card-title" style="font-family: 'Merriweather', serif; ; font-size: 36px;">
                      Related PDFs</h5>
                  <div class="row" style="margin: auto;">
                  ${pdfString}
                  </div>
              </div>
          </div>
  
          <div class="card mx-2 ml-2 mt-2 py-3" style="width: 32rem; ">
              <div class="card-body">
                  <h5 class="card-title" style="font-family: 'Merriweather', serif; ; font-size: 36px;">
                      Research Papers</h5>
    
                  <div class="row" style="margin: auto;">
                      ${rersearchString}
                  </div>
              </div>
          </div>
      </div>
  
      <div class="card mx-2 ml-2 mt-2 py-3"
          style="width: 65rem; ; min-height: 350px; max-height: max-content;">
          <div class="card-body">
              <h5 class="card-title" style="font-family: 'Merriweather', serif; ; font-size: 36px;">Youtube
                  Links</h5>
              ${youtubeString}
  
          </div>
          
      </div>
  
      <div class="card mx-2 ml-2 mt-2 py-3"
          style="width: 65rem ; min-height: 100vw;max-height: max-content; ;">
          <div class="card-body">
              <h5 class="card-title" style="font-family: 'Merriweather', serif; ; font-size: 36px;">Additional
                  Information
              </h5>
  
              <div class="container">
                  ${articleString}         
                </div>
  
              
          <script src="./search.js"></script>
  </body>
  
  </html>
`);
};
