'use strict'
const express = require('express')
const router = express.Router()
const conn = require('./../lib/connection')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('add', {title: 'Add Person'})
})

router.post('/', (req, res, next) => {
  let postData = req.body
  let insertAddressSql = 'INSERT INTO address (city, zip) VALUES (?, ?)'
  let insertHomeTownSql = 'INSERT INTO address (city, zip) VALUES (?, ?)'
  let insertUserSql = 'INSERT INTO person (firstName, lastName, email, birthDate, fk_address, fk_hometown) ' +
    'VALUES (?, ?, ?, ?, (SELECT id FROM address WHERE zip = ?), (SELECT id FROM address WHERE zip = ?))'
  let error = false
  Object.keys(postData).forEach(key => {
    if (postData[key] === '' || postData[key] === 'undefined') {
      error = true
    }
  })
  res.header('content-type', 'application/json')
  if (!error) {
    conn.query(insertAddressSql, [postData.city, postData.zip], data => {
      conn.query(insertHomeTownSql, [postData.homeCity, postData.homeCityZip], data => {
        conn.query(
          insertUserSql,
          [postData.firstName, postData.lastName, postData.email, postData.birthDate, postData.zip, postData.homeCityZip],
          data => {
            res.send({success: true})
          }
        )
      })
    })
  } else {
    res.send({
      err: 'Please completely fill out the form.',
      success: false
    })
  }
})

module.exports = router
