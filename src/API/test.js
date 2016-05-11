var rp = require('request-promise');
var keywords = '杭州+卧龙桥'
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

var addressInfo = []
rp(options)
    .then(function (repos) {
      console.log('User has %d repos', repos.length);
      addressInfo.push(JSON.parse(repos).pois[0])
    })
    .catch(function (err) {
        // API call failed...
    });

setTimeout(function(){return console.log(addressInfo)}, 3000)
