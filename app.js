//imports ----------------------------------------------------->
const express = require("express");
const cors = require("cors");
const compression = require("compression");

//routes imports ---------------------------------------------->
const mainRouter = require("./routes/mainRouter");

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

//routes ------------------------------------------------------>
app.use("/user", mainRouter);

//Export app -------------------------------------------------->
module.exports = app;
