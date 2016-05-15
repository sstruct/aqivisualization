'use strict'
let rp = require('request-promise');
let fs = require('fs')

const initData = require('../data/2016-05-10T21:00:00Z.json')

// 将原数组 initData 中的 area 和 position_name 拼接为 address,
// 并返回含有 address 的新数组 data
let data = (function(data) {
  let length = data.length
  for(let i = 0; i < length; i++) {
    data[i].address = data[i].area + '+' + data[i].position_name
  }
  return data
})(initData)

// 根据关键词(keywords)获取详细地理位置信息, 包括 coordinates 等
let getAddressInfo = function(keywords) {
  for(let i=900; i<data.length; i++) {
    keywords = data[i].address
    let options = {
      uri: 'http://restapi.amap.com/v3/place/text',
      qs: {
        key: '9af057131c164beb294688e7847d9e84',
        keywords: keywords
      }
    }
    rp(options)
      .then(function (res) {
          if(res.length !== 0) {
            // 将获取到的字符在解析成成JS对象, 并将第一个匹配地址存入cityInfo
            let addressInfo = data
            addressInfo[i].addressDetail = JSON.parse(res).pois[0]
            let item = JSON.stringify(addressInfo[i])+','
            console.log(JSON.parse(res).pois[0])
            fs.appendFile('newData.json',item ,'utf8',
            function (err) {
              if (err) return console.log(err);
              // console.log('err written\n',JSON.parse(res).pois[0]);
            })}
      })
      .catch(function (err) {
          // API call failed...
      });
  }
}

getAddressInfo()
