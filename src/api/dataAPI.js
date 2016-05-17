// import Data from '../../API/2016-05-10T13:00:00Z.json'

/*
 *calculate avarage AQI
 *@para data:array
 */
export const calculateAverageAQI = (data) => {
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
export const getAreaData = (area, data) => {
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
export const getAddress = (area, Data) => {
  let areaData = getAreaData(area, Data)
  for(let i=0; i<areaData.length; i++) {
    let address = areaData[i].area + '+' + areaData[i].position_name
    areaData[i].address = address
    console.log(areaData[i].address)
  }
  return areaData
}
