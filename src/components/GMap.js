import './GMap.scss'
let google = window.google

// This example uses the autocomplete feature of the Google Places API.
// It allows the user to find all positions in a given place, within a given
// country. It then displays markers for all the positions returned,
// with on-click details for each hotel.

let map, places;
let countries = {
  'us': {
    center: {lat: 37.1, lng: -95.7},
    zoom: 3
  },
  'cn': {
    center: {lat: 36.2304, lng: 111.4737},
    zoom: 4
  }
};

// initialize the map to center China
window.onload = function() {
  map = new google.maps.Map(
    document.getElementById('map'), {
      center: countries['cn'].center,
      mapTypeId: google.maps.MapTypeId.SATELLITE,
      zoom: 4,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.LEFT_BOTTOM
      },
      streetViewControl: false,
    });

  let waqiMapOverlay = new google.maps.ImageMapType({
      getTileUrl: function(coord, zoom) {
        return 'http://tiles.aqicn.org/tiles/usepa-aqi/' + zoom + '/' + coord.x + '/' + coord.y + '.png?token=_TOKEN_ID_';
    },
    name: 'AQIVisualization', });

  map.overlayMapTypes.insertAt(0,waqiMapOverlay);

  // Search Box
  let input = document.getElementById('cityInput')
  let searchBox = new google.maps.places.SearchBox(input)

  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    places = searchBox.getPlaces();
    if (places.length == 0) {
      return;
    }
    // Create the searchbox object and associate it with the UI input control.
    // Restrict the search to the default country, and to place type "cities".
    let place = places[0]
    if (place.geometry) {
      map.panTo(place.geometry.location);
      map.setZoom(13);
    } else {
      document.getElementById('searchBox').placeholder = 'Which City?';
    }
  })
}
