'use strict'
const initData = require('../data/2016-05-10T21:00:00Z.json')
// var fs = require('fs')
// const initData = JSON.parse(fs.readFileSync('../data/2016-05-10T21:00:00Z.json', 'utf8'))

var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/aqidata');
var db = mongoose.connection
var assert = require('assert')
mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema
var aqiSchema = new Schema({
  aqi: Number,
  area: String,
  co: Number,
  co_24h: Number,
  no2: Number,
  no2_24h: Number,
  o3: Number,
  o3_24h: Number,
  o3_8h: Number,
  o3_8h_24h: Number,
  pm10: Number,
  pm10_24h: Number,
  pm2_5: Number,
  pm2_5_24h: Number,
  position_name: String,
  primary_pollutant: String,
  quality: String,
  so2: Number,
  so2_24h: Number,
  station_code: String,
  time_point: String
 })

var aqi = mongoose.model('aqi', aqiSchema)

// Now, the interesting part:

aqi.collection.insertMany(initData, function(err,r) {
       db.close();
 })

// mongoimport --db aqidata --collection aqi --file 2016-04-23T10:00:00Z.json   --jsonArray
