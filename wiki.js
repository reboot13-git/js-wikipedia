"use strict";
exports.__esModule = true;
var prompt = require('prompt-sync')();
var fetch = require('node-fetch');
var query = prompt('Query: ');
var api = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exchars=1200&titles="+ query +"&explaintext=true&format=json";
console.log("Results:");
console.log("Getting Data from API");
fetch(api)
    .then(function (res) { return res.json(); })
    .then(data => {
   var pageobject = data.query.pages;
   var pageid = [];
   for(var key in pageobject) pageid.push(key);
   let id = pageid[0];
   let result = data['query']['pages'][id]['extract'];
   console.log(result);
 })