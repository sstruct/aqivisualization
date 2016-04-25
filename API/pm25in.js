var request = require("request");
var express = require('express')
var cheerio = require('cheerio')

var options = {
  method: 'GET',
  "hostname": "www.pm25.in",
  url: 'http://www.pm25.in/api/querys/all_cities.json',
  headers:{
     'cache-control': 'no-cache',
     token: '5j1znBVAsnSf5xQyNQyq'
     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36"
   }
 };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
