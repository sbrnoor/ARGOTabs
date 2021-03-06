#!/usr/bin/env node
var express = require('express')
var path = require('path')
var fallback = require('express-history-api-fallback')
var app = express()

var root = path.join(__dirname, '..', 'public')
app.use(express.static(root))
app.get('/manifest.appcache', (req, res) => {
  res.status(404).send('App Cache manifest is currently disabled')
})
app.use(fallback('index.html', { root }))
app.listen(process.env.PORT || 3000)
