import React, { Component } from 'react'
import uuid from 'uuid'

export default class RatedList extends Component {
  render () {
    const { ratedBeers } = this.props

    let ratedBeersList = ratedBeers.map(beer => {
      return (
        <tr key={uuid()}>
          <td>{beer.beer}</td>
          <td>{beer.rating}</td>
          <td>{beer.comments}</td>
        </tr>
      )
    })

    return (
      <tbody>
        {ratedBeersList}
      </tbody>
    )
  }
}
