// import data
import Data from '../../API/2016-05-10T13:00:00Z.json'

/*
 *calculate avarage AQI
 *@para data:array
 */
const calculateAverageAQI = (data) => {
  let length = data.length
  let i=0, sum = 0, avg = 0
  for(i; i<length; i++){
    sum += parseInt(data[i].aqi, 10)
  }
  return avg = sum / length
}

/*
 *get one area's data
 *@para area:string
 *@para data:array
 */
const getAreaData = (area, data) => {
  let length = data.length
  let areaData = []
  let i = 0
  for(; i<length; i++) {
    if(data[i].area == area){
      areaData.push(data[i])
    }
  }
  return areaData
}

/*
 *convert address to coords
 *@para area:string
 *@para Data:array
 */
const getCoords = (area, Data) => {
  let areaData = getAreaData(area, Data)
  for(let i=0; i<areaData.length; i++) {
    let address = areaData[i].area + areaData[i].position_name
    areaData[i].address = address
    console.log(areaData[i].address)
  }
  return areaData
}

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
