import Data from './2016-05-10T09:00:00Z.json'

/*
 *calculate avarage AQI
 *@para data:array
 */
let calculateAverageAQI = (data) => {
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
let getAreaData = (area, data) => {
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

let beijingData = getAreaData('杭州', Data)

let all = calculateAverageAQI(beijingData)

const TOTAL_COUNT = parseInt(all)

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
  }));
