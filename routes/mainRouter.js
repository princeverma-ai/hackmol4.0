//imports ----------------------------------------------------->
const mainController = require("../controllers/mainController");
const express = require("express");

//Router ------------------------------------------------------>
const Router = express.Router();

Router.route("/").get(mainController.get);

//Export Router ----------------------------------------------->
module.exports = Router;
