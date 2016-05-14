import './Main.scss'
import 'normalize.css/normalize.css';
import './Header'

let google = window.google
window.onload = function(){
  let map = new google.maps.Map(
    document.getElementById('map'),
    {
      center: new google.maps.LatLng(36.2304, 111.4737),
      mapTypeId: google.maps.MapTypeId.SATELLITE,
      zoom: 4,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.LEFT_BOTTOM
      },
      streetViewControl: false,
    });
  let t = new Date().getTime();
  let waqiMapOverlay = new google.maps.ImageMapType({
      getTileUrl: function(coord, zoom) {
        return 'http://tiles.aqicn.org/tiles/usepa-aqi/' + zoom + '/' + coord.x + '/' + coord.y + '.png?token=_TOKEN_ID_';
    },
    name: 'AQIVisualization', });
  map.overlayMapTypes.insertAt(0,waqiMapOverlay);
  var input = document.getElementById('cityInput')
  var searchBox = new google.maps.places.SearchBox(input)
  console.log(searchBox);
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();
    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}
