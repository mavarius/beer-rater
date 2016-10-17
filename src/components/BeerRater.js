import React, { Component } from 'react'
import BeerStore from '../stores/BeerStore'
import BeerActions from '../actions/BeerActions'
import RandomBeer from './RandomBeer'
import RatedTable from './RatedTable'

export default class BeerRater extends Component {
  constructor () {
    super()

    this.state = {
      ratedBeers: BeerStore.getRatedBeers(),
      randomBeer: BeerStore.getRandomBeer()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    BeerStore.startListening(this._onChange)
    BeerActions.getRatedBeers()
    BeerActions.getRandomBeer()
  }

  componentWillUnmount () {
    BeerStore.stopListening(this._onChange)
  }

  _onChange () {
    this.setState({
      ratedBeers: BeerStore.getRatedBeers(),
      randomBeer: BeerStore.getRandomBeer()
    })
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <RandomBeer {...this.state} />
        </div>
        <div className="row">
          <RatedTable {...this.state} />
        </div>
      </div>
    )
  }
}
