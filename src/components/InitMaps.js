let GoogleMapsLoader = require('google-maps'); // only for common js environments

let options = {
  zoom: 4,
  center: {lat: 35.22, lng: 110.48},
  // mapTypeId: google.maps.MapTypeId.TERRAIN,
  mapTypeControl: true
  // mapTypeControlOptions: {
    // style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
    // position: google.maps.ControlPosition.LEFT_BOTTOM
  // }
}

let el = document.getElementById('map')

GoogleMapsLoader.KEY = 'AIzaSyACeZsYd8xiS1jF_VviZZGmNjY0gQX-Co4'
GoogleMapsLoader.LIBRARIES = ['geometry', 'places']
GoogleMapsLoader.LANGUAGE = 'zh-CN'
GoogleMapsLoader.REGION = 'cn'

GoogleMapsLoader.load(function(google) {
	new google.maps.Map(el, options);
});
