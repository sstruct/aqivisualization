'use strict'
let CronJob = require('cron').CronJob
let getPM25cn = require('./modules/getPM25cn')

var time = '05 50 * * * *'
// Do cron job at random mimutes in every last half hour
// var timer = function (time) {
//   let randomNum = Math.random()
//   let minute = parseInt(randomNum<0.5?(randomNum+0.5)*60:randomNum*60)
//   time = '00 '+minute+' * * * *'
//   console.log(time);
// }

// new CronJob('00 20 */2 * * *', function() {
//   let data = new Date()
//   getPM25cn.login()
//   console.log('login run at:', data.getSeconds(),'S',data.getMinutes(),'M', data.getHours(),'H')
// }, null, true, 'Asia/Shanghai')

// new CronJob('*/5 * * * * *', function() {
new CronJob(time, function() {
  let date = new Date()
  getPM25cn.getPM25cn()
  console.log('getPM25cn run at:', date.getSeconds(),'S',date.getMinutes(),'M', date.getHours(),'H')
}, null, true, 'Asia/Shanghai')
