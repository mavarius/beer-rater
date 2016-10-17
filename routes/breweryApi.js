const express = require('express')
const router = express.Router()

const BreweryApi = require('../models/BreweryApi')

router.use((req, res, next) => {
  res.handle = (err, data) => res.status(err ? 400 : 200).send(err || data)
  next()
})

router.route('/')
.get((req, res) => {
  BreweryApi.getRandomBeer(res.handle)
})

module.exports = router
