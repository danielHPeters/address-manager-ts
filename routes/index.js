'use strict'
const request = require('request')
const express = require('express')
const router = express.Router()
const url = 'http://localhost:3000/people'

/* GET home page. */
router.get('/', (req, res, next) => {
  request(url, (err, response, body) => {
    if (err || response.statusCode !== 200) {
      return res.sendStatus(500)
    }
    res.render('index', {title: 'Administration', people: JSON.parse(body).people})
  })
})
module.exports = router
