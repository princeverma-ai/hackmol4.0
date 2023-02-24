//imports ----------------------------------------------------->
const express = require("express");

const getTopGoogleLinks = require("./utils/getTopGoogleLinks");

//initialize app ---------------------------------------------->
const app = express();

//middleware -------------------------------------------------->
app.use(express.json());

app.use(express.static("public"));

const searchQuery = "define ece";
getTopGoogleLinks(searchQuery, 3).then((links) => {
  console.log(links);
});

//Export app -------------------------------------------------->
module.exports = app;
