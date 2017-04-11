var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var port    = '8081';

app.get('/scrape', function(req, res){

  //All the web scraping magic will happen here

})


app.listen(port)

console.log('Port opened at' + port);

exports = module.exports = app;