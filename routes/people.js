'use strict'

const express = require('express')
const router = express.Router()
const conn = require('./../lib/connection')

/* GET users listing. */
router.get('/', (req, res) => {
  res.header('content-type', 'application/json')
  let sql = 'SELECT p.id, p.firstName, p.lastName, p.email, p.birthDate, ' +
    'addr.zip AS zip, addr.city AS city, home.city AS homeCity, home.zip AS homeCityZip ' +
    'FROM person AS p ' +
    'INNER JOIN address AS addr ON addr.id = p.fk_address ' +
    'INNER JOIN address AS home ON home.id = p.fk_hometown'

  conn.query(sql, [], (data) => res.send({ people: data }))
})

module.exports = router
