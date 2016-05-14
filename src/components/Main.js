import 'normalize.css/normalize.css';
import './Main.scss'

let google = window.google
window.onload = function(){
  let map = new google.maps.Map(
    document.getElementById('map'),
    {
      center: new google.maps.LatLng(36.2304, 111.4737),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 4
    });
  let t = new Date().getTime();
  let waqiMapOverlay = new google.maps.ImageMapType({
      getTileUrl: function(coord, zoom) {
        return 'http://tiles.aqicn.org/tiles/usepa-aqi/' + zoom + '/' + coord.x + '/' + coord.y + '.png?token=_TOKEN_ID_';
    },
    name: 'Air Quality', });
  map.overlayMapTypes.insertAt(0,waqiMapOverlay);
}
