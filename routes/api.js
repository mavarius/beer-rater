const express = require('express')
const router = express.Router()

router.use('/ratedBeers', require('./ratedBeers'))
router.use('/breweryApi', require('./breweryApi'))

module.exports = router
