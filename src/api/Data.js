// import { calculateAverageAQI, getAreaData, getCoords} from './DataAPI'
import newData from './newData.json'

// 拿到一个检测点的 aqi 值和坐标
let aqi = newData[0].aqi
console.log(aqi);
let location = newData[0].addressDetail.location
let lng = location.split(',')[0]
let lat = location.split(',')[1]

const TOTAL_COUNT = parseInt(200)

// 地图中心点
export const zhongyuanCoords = { lat: 36.2304, lng: 111.4737 };

// 检测点的坐标
export const markersData = [...Array(TOTAL_COUNT)].fill(0) // fill(0) for loose mode
  .map((__, index) => ({
    id: index,
    lat: lat,
    lng: lng
  }))
