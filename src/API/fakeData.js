import Data from './data/2016-05-10T13:00:00Z.json'
import { calculateAverageAQI, getAreaData, getCoords} from './DataAPI'

let foo = getCoords('北京', Data)

// main function
let beijingData = getAreaData('北京', foo)

let all = calculateAverageAQI(beijingData)

const TOTAL_COUNT = parseInt(all)

export const zhongyuanCoords = { lat: 36.2304, lng: 111.4737 };

// 一串随机的坐标
export const markersData = [...Array(TOTAL_COUNT)].fill(0) // fill(0) for loose mode
  .map((__, index) => ({
    id: index,
    lat: zhongyuanCoords.lat + Math.random(),
    lng: zhongyuanCoords.lng + Math.random()
  }))
