import API from '../API'
// import AppDispatcher from '../AppDispatcher'

const SearchActions = {
  getRandomBeer () {
    API.getRandomBeer()
  },

  getRatedBeers () {
    API.getRatedBeers()
  },

  saveBeer (newBeer) {
    API.saveBeer(newBeer)
  }
}

export default SearchActions
