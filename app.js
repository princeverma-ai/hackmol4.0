//imports ----------------------------------------------------->
const express = require("express");

const searchController = require("./routes/search");
//initialize app ---------------------------------------------->
const app = express();

//middleware -------------------------------------------------->

//setting url encodes in express.jsom
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//routes ------------------------------------------------------->
app.post("/search", searchController.searchController);

//Export app -------------------------------------------------->
module.exports = app;
