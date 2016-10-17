const axios = require('axios')

exports.getRandomBeer = (cb) => {
  axios.get(`http://api.brewerydb.com/v2/beer/random?key=${process.env.BREWERY_DB_KEY}`)
    .then(res => cb(null, res.data))
    .catch(console.error)
}
