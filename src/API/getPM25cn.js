var rp = require('request-promise');
var fs = require('fs')

var getPM25cn = function() {
  function login() {
    var options = {
      uri: 'http://www.pm25.in/api/querys/all_cities.json?token=5j1znBVAsnSf5xQyNQyq',
      qs: {
        'method': 'GET'
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

  var options = {
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
        var data = JSON.stringify(JSON.parse(res))
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

getPM25cn()
