'use strict'
let CronJob = require('cron').CronJob
let getPM25cn = require('./getPM25cn')

new CronJob('* 50 * * * *', function() {
  let data = new Date()
  getPM25cn.login()
  console.log('run at:', data.getSeconds(),'S',data.getMinutes(),'M')
}, null, true, 'Asia/Shanghai')

new CronJob('* 55 * * * *', function() {
  let data = new Date()
  getPM25cn.getPM25cn()
  console.log('and run at:', data.getSeconds(),'S',data.getMinutes(),'M')
}, null, true, 'Asia/Shanghai')
