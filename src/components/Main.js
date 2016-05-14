import './Main.scss'
import 'normalize.css/normalize.css';

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
}
