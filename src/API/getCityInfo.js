const request = require("request")

const getCoords = (keywords) => {
  var options = {
    method: 'GET',
    url: 'http://restapi.amap.com/v3/place/text',
    qs: { key: '9af057131c164beb294688e7847d9e84', keywords: keywords },
    headers: {
      'cache-control': 'no-cache'
    }
  }
  request(options, (error, response, body) => {
    if (error) throw new Error(error)
    console.log(body)
  })
}

var hangzhou = getCoords('杭州')
