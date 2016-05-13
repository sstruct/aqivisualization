'use strict'
let CronJob = require('cron').CronJob
let getPM25cn = require('./getPM25cn')

new CronJob('* */60 * * * *', function() {
  let data = new Date()
  get.login()
  console.log('run at:', data.getSeconds(),'S',data.getMinutes(),'M')
}, null, true, 'Asia/Shanghai')

new CronJob('* */50 * * * *', function() {
  let data = new Date()
  get.getPM25cn()
  console.log('and run at:', data.getSeconds(),'S',data.getMinutes(),'M')
}, null, true, 'Asia/Shanghai')
