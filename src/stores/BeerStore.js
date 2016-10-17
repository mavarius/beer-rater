import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _randomBeer = {}
let _ratedBeers = []

class BeerStore extends EventEmitter {
  constructor () {
    super()

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_RANDOM_BEER':
          _randomBeer = action.payload
          this.emit('CHANGE')
          break
        case 'RECEIVE_RATED':
          _ratedBeers = action.payload
          this.emit('CHANGE')
          break
      }
    })
  }

  startListening (cb) {
    this.on('CHANGE', cb)
  }

  stopListening (cb) {
    this.removeListener('CHANGE', cb)
  }

  getRandomBeer () {
    return _randomBeer
  }

  getRatedBeers () {
    return _ratedBeers
  }
}

export default new BeerStore()
