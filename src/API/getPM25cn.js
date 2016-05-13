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
      // console.log(res)
      let fileName = res[0].time_point + '.json'
      if(fileName.length > 20) {
        fs.writeFile(fileName, res ,'utf8',
        function (err) {
          console.log(fileName)
          if (err) return console.log(err);
          // console.log('err written\n',JSON.parse(res).pois[0]);
        })
      } else {
        console.log('getPM25cn failed')
      }
    })
    .catch(function (err) {
        // API call failed...
    })
}

// login()
getPM25cn()

module.exports = {
  getPM25cn: getPM25cn,
  login: login
}
