var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');

request('https://savannah.craigslist.org/d/jobs/search/jjj',
  function(error, response, body){
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.

    // if(!error && response.statusCode == 200){
    //   var $ = cheerio.load(body);
    //
    //   var allRecords = $('p.row');
    //   console.log($);
    //
    //   allRecords.each(function(index, element){
    //
    //   })
    // }
  }
)
