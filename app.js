//imports ----------------------------------------------------->
const express = require("express");
const cors = require("cors");
const compression = require("compression");


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
