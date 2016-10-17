import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveRatedBeers (data) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_RATED',
      payload: data
    })
  },

  receiveRandomBeer (data) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_RANDOM_BEER',
      payload: data
    })
  }
}

export default ServerActions
