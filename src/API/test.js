var request = require("request");

var options = { method: 'GET',
  url: 'http://restapi.amap.com/v3/place/text',
  qs: { key: '9af057131c164beb294688e7847d9e84', keywords: '杭州 卧龙桥' },
  headers: {
    'cache-control': 'no-cache'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});
