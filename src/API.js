import { get, post } from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getRandomBeer (beer) {
    get('/api/breweryApi')
    .then(res => {
      ServerActions.receiveRandomBeer(res.data.data)
    })
    .catch(console.error)
  },

  getRatedBeers () {
    get('/api/ratedBeers/')
    .then(res => {
      ServerActions.receiveRatedBeers(res.data)
    })
    .catch(console.error)
  },

  saveBeer (newBeer) {
    post('/api/ratedBeers/', newBeer)
    .then(res => {
      ServerActions.receiveRatedBeers(res.data)
    })
  }

}

export default API
