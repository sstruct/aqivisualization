'use strict'
let rp = require('request-promise');
let fs = require('fs')

let login = function() {
  let options = {
    uri: 'http://www.pm25.in/api/querys/all_cities.json?token=5j1znBVAsnSf5xQyNQyq',
    qs: {
      'method': 'GET',
      'cache-control': 'no-cache'
    }
  }
  rp(options)
    .then(function(res) {
      console.log(JSON.parse(res));
      console.log('logined');
    })
    .catch(function (err) {
        // API call failed...
    })
}

let getPM25cn = function () {
  let options = {
    uri: 'http://www.pm25.in/api/querys/all_cities.json',
    qs: {
      token: '5j1znBVAsnSf5xQyNQyq',
      'method': 'GET',
      'cache-control': 'no-cache'
    }
  }
  rp(options)
    .then(function(res) {
      console.log(JSON.parse(res));
      if(JSON.stringify(JSON.parse(res)).length < 10000) {
        login()
      } else {
        let data = JSON.stringify(JSON.parse(res))
        fs.writeFile('thisisthename.json', data ,'utf8',
          function (err) {
            if (err) return console.log(err);
            // console.log('err written\n',JSON.parse(res).pois[0]);
        })}
      }
    )
    .catch(function (err) {
        // API call failed...
    })
}

module.exports = {
  getPM25cn: getPM25cn,
  login: login
}
