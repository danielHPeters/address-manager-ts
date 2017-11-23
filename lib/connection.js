'use strict'

module.exports.query = (statement, bindings, callback) => {
  const db = require('odbc')()
  const dsn = 'DSN=m151'
  db.open(dsn, err => {
    if (err) {
      return console.log(err)
    }

    db.query(statement, bindings, (err, data) => {
      if (err) {
        console.log(err)
      }

      console.log(data)

      db.close(() => {
        callback(data)
      })
    })
  })
}