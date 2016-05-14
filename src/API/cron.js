'use strict'
let CronJob = require('cron').CronJob
let getPM25cn = require('./modules/getPM25cn')

new CronJob('00 12 * * * *', function() {
  let data = new Date()
  getPM25cn.login()
  console.log('login run at:', data.getSeconds(),'S',data.getMinutes(),'M', data.getHours(),'H')
}, null, true, 'Asia/Shanghai')

new CronJob('00 15 * * * *', function() {
  let data = new Date()
  getPM25cn.getPM25cn()
  console.log('getPM25cn run at:', data.getSeconds(),'S',data.getMinutes(),'M', data.getHours(),'H')
}, null, true, 'Asia/Shanghai')
