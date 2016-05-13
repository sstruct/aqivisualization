'use strict'
let CronJob = require('cron').CronJob
let getPM25cn = require('./getData/getPM25cn')

new CronJob('* 00 * * * *', function() {
  let data = new Date()
  getPM25cn.login()
  console.log('run at:', data.getSeconds(),'S',data.getMinutes(),'M')
}, null, true, 'Asia/Shanghai')

new CronJob('* 05 * * * *', function() {
  let data = new Date()
  getPM25cn.getPM25cn()
  console.log('and run at:', data.getSeconds(),'S',data.getMinutes(),'M')
}, null, true, 'Asia/Shanghai')
