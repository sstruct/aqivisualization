import Data from './newData.json'
// import { calculateAverageAQI, getAreaData, getCoords} from './DataAPI'

const dataSource = JSON.parse(Data)

console.log(Data)

const TOTAL_COUNT = parseInt(200)

export const zhongyuanCoords = { lat: 36.2304, lng: 111.4737 };

// 一串随机的坐标
export const markersData = [...Array(TOTAL_COUNT)].fill(0) // fill(0) for loose mode
  .map((__, index) => ({
    id: index,
    lat: Data,
    lng: zhongyuanCoords.lng + Math.random()
  }))
