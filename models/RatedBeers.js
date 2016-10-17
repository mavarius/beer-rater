const squel = require('squel').useFlavour('mysql')
const connection = require('../config/db')
const tablename = 'ratedBeers'

// SCHEMA
connection.query(`CREATE TABLE IF NOT EXISTS ${tablename} (
  beer VARCHAR(50),
  rating SMALLINT,
  sampled TINYINT,
  comments VARCHAR(400),
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id)
)`, err => {
  if (err) throw err
})

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${tablename}`, (err, beer) => {
      if (err) return reject(err)
      resolve(beer)
    })
  })
}

exports.create = function (newBeer) {
  return new Promise((resolve, reject) => {
    let sql = squel.insert()
      .into(tablename)
      .setFields(newBeer)
      .toString()

    connection.query(sql, (err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}
