import React, { Component } from 'react'
import BeerActions from '../actions/BeerActions'

export default class RandomBeer extends Component {
  handleForm (e) {
    e.preventDefault()
    const { name } = this.props.randomBeer
    const { rating, comments } = this.refs

    let newBeer = {
      beer: name,
      rating: rating.value,
      comments: comments.value,
      sampled: 1
    }

    rating.value = ''
    comments.value = ''

    BeerActions.saveBeer(newBeer)
  }

  render () {
    const { name } = this.props.randomBeer

    return (
      <div className="container">
        <h4>Random Beer</h4>
        <h3>{name}</h3>
        <form onSubmit={(e) => this.handleForm(e)}>
          <label>Rating <input type="number" ref="rating" min="0" max="10" /></label>
          <label>Comments <input type="text" ref="comments" /></label>
          <button>Add to Sampled Beers</button>
        </form>
      </div>
    )
  }
}
