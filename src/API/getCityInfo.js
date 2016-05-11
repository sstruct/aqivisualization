var rp = require('request-promise');
var fs = require('fs')

const initData = require('./data/2016-05-10T21:00:00Z.json')

// 将原数组 initData 中的 area 和 position_name 拼接为 address,
// 并返回含有 address 的新数组 data
var data = (function(data) {
  var length = data.length
  for(var i = 0; i < length; i++) {
    data[i].address = data[i].area + '+' + data[i].position_name
  }
  return data
})(initData)

// 获取详细地址数据, 包括 coordinates 等
var getAddressInfo = function(keywords) {
  var options = {
    uri: 'http://restapi.amap.com/v3/place/text',
    qs: {
      key: '9af057131c164beb294688e7847d9e84',
      keywords: keywords
    },
    headers: {
      'cache-control': 'no-cache',
    }
  }

  // 根据关键词(address)获取详细地理位置信息
  var addressInfo = []
  rp(options)
    .then(function (res) {
      console.log(res.length);
      // 将获取到的字符在解析成成JS对象, 并将第一个匹配地址存入cityInfo
      // addressInfo.push(JSON.parse(res).pois[0])
      // fs.appendFile('addressInfo.json', JSON.stringify(addressInfo), 'utf8',
      JSON.parse(res).pois[0]
      fs.appendFile('addressInfo.json', JSON.stringify(JSON.parse(res).pois[0]) + ',', 'utf8',
      function (err) {
        if (err) return console.log(err);
        console.log('addressjson written');
     })
    })
    .catch(function (err) {
        // API call failed...
    });
}

var length = data.length
setTimeout(function(){
  for(var i=0; i<3; i++) {
  getAddressInfo(data[i].address)}
},3000)