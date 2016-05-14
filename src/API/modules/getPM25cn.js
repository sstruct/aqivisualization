'use strict'
let rp = require('request-promise');
let fs = require('fs')
// const testData = require('./data/2016-05-10T13:00:00Z.json')

let login = function() {
  let options = {
    uri: 'http://www.pm25.in/api/querys/all_cities.json?token=5j1znBVAsnSf5xQyNQyq',
    qs: {
      'postman-token': 'e3534778-5721-190e-9384-7660a2651006',
      token: '5j1znBVAsnSf5xQyNQyq',
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
      'postman-token': 'e3534778-5721-190e-9384-7660a2651006',
      token: '5j1znBVAsnSf5xQyNQyq',
      'method': 'GET',
      'cache-control': 'no-cache'
    }
  }
  rp(options)
    .then(function(res) {
      console.log(res)
      let fileName = res[0].time_point + '.json'
      // let fileName = testData[0].time_point + '.json'
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

module.exports = {
  getPM25cn: getPM25cn,
  login: login
}
