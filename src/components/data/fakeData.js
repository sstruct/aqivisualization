import Data from './2016-05-10T09:00:00Z.json'

// Calculate one area's average AQI
// let calculateAverageAQI = function(area, Data) {
//   let monitorPoints = []
//   let sum = 0, avg =0
//   for(let i = 0; i<=Data.length; i++){
//     if(Data[i].area = area){
//       monitorPoints.push(Data[i])
//     }
//     sum = monitorPoints.reduce(function(a, b) { return a + b; });
//     sum += monitorPoints[]
//   }
//
//   Data.forEach((index, item) => {
//     if(item[index].area = area){
//       monitorPoints.push(item[index])
//       sum += item[index].aqi
//     }
//     avg = sum / monitorPoints.length
//   })
// }
// let hangzhouAQI = calculateAverageAQI('杭州', Data)



function calculateAverageAQI(Data) {
  let length = Data.length
  let i=0, sum = 0, avg = 0
  for(i; i<length; i++){
    sum += parseInt(Data[i].aqi, 10 )
  }
  return avg = sum / length
}

let all = calculateAverageAQI(Data)

let beijingAQI = Data[0].aqi + Data[1].aqi + Data[2].aqi + Data[3].aqi

const TOTAL_COUNT = beijingAQI;

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
