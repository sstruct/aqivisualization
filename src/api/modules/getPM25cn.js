'use strict'
let rp = require('request-promise');
let fs = require('fs')
// let testData = require('../data/2016-05-10T13:00:00Z.json')

let login = function() {
  let loginOptions = {
    uri: 'http://www.pm25.in/api/querys/all_cities.json?token=5j1znBVAsnSf5xQyNQyq',
    qs: {
      token: '5j1znBVAsnSf5xQyNQyq',
      'method': 'GET',
      'cache-control': 'no-cache',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36'
    }
  }
  rp(loginOptions)
    .then(function(res) {
      console.log('login res ', res);
      let fileName = res[0].time_point + '.json'
      console.log('logined fileName: ', fileName)
      if(fileName !== 'undefined.json') {
        fs.writeFile(fileName, res ,'utf8')
      } else {
        console.log('getPM25cn failed')
      }
    })
    .catch(function (err) {
        // API call failed...
    })
}

let getPM25cn = function () {
  let getJSONoptions = {
    uri: 'http://www.pm25.in/api/querys/all_cities.json',
    qs: {
      token: '5j1znBVAsnSf5xQyNQyq',
      'method': 'GET',
      'cache-control': 'no-cache',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36'
    }
  }
  rp(getJSONoptions)
    .then(function(res) {
      console.log('getPM25cn res: ',res);
      let date = new Date()
      let optionName = date.getSeconds()+'S'+date.getMinutes()+'M'+date.getHours()+'H'+date.getDate()+'D.json'
      let timeNameFromRes = res[0].time_point + '.json'
      let fileName = timeNameFromRes == 'undefined.json'?optionName:timeNameFromRes
      console.log('getPM25cn fileName: ', fileName)
      let err = JSON.parse(res).error
      console.log('getPM25cn err: ', err);
      if(err) {
        if(err == `You need to sign in or sign up before continuing.`) {
          login()
          console.log('not login')
        } else {
          if(err == `Sorry，您这个小时内的API请求次数用完了，休息一下吧！`)
          console.log('Take a rest')
        }
      }
      if(fileName !== 'undefined.json') {
        fs.writeFile(fileName, res ,'utf8',
        function () {
          console.log('yaeh~');
        })
      } else {
        console.log('getPM25cn failed')
      }
    })
    .catch(function (err) {
        // API call failed...
    })
}

// getPM25cn()

module.exports = {
  getPM25cn: getPM25cn,
  login: login
}
