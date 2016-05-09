import Geojson from './Geojson.json'

let geojson = JSON.parse(Geojson)

const TOTAL_COUNT = 500;

export const zhongyuanCoords = { lat: 36.2304, lng: 111.4737 };

export const markersData = [...Array(TOTAL_COUNT)].fill(0) // fill(0) for loose mode
  .map((__, index) => ({
    id: index,
    lat: zhongyuanCoords.lat +
      0.01 * index *
      Math.sin(30 * Math.PI * index / 180) *
      Math.cos(50 * Math.PI * index / 180) + Math.sin(5 * index / 180),
    lng: zhongyuanCoords.lng +
      0.01 * index *
      Math.cos(70 + 23 * Math.PI * index / 180) *
      Math.cos(50 * Math.PI * index / 180) + Math.sin(5 * index / 180),
    aqi: 100,
  }));

export const sitesPositonData = [...Array(geojson.length)].fill(0)
  .map((__, index) => ({
    id: index,
    lat: zhongyuanCoords.lat,
    lng: zhongyuanCoords.lng
  }))
