const express = require('express')
const router = express.Router()

const RatedBeers = require('../models/RatedBeers')

router.get('/', (req, res) => {
  RatedBeers.getAll()
    .then(beer => {
      res.send(beer)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.post('/', (req, res) => {
  RatedBeers.create(req.body)
    .then(RatedBeers.getAll)
    .then(beer => {
      res.send(beer)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = router
