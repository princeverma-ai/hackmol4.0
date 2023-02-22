//imports ----------------------------------------------------->
const express = require("express");
const cors = require("cors");
const compression = require("compression");


const axios=require('axios');
const cheerio=require('cheerio');

const query="8086 microprocessor";
const queryArray=query.split(" ");
const queryUrl=queryArray.join("+");
const url=`https://www.google.com/search?q=${queryUrl}`

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

async function getHtml(url){
    try{
    const {data}=await axios.get(url);
    return cheerio.load(data);
    }catch(err){
        console.log(err);
    }
}

 getHtml(url).then(($)=>{
    const data=[];
    $('div[class="BNeawe s3v9rd AP7Wnd"]').each((i,el)=>{
        data.push($(el).text());
    })
    console.log(data);
}
)


app.use(express.static("public"));



//Export app -------------------------------------------------->
module.exports = app;
