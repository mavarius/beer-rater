import React, { Component } from 'react'
import RatedList from './RatedList'

export default class RatedTable extends Component {
  render () {
    return (
      <div className="container">
        <h4>Sampled Beers</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Beer Name</th>
              <th>Rating</th>
              <th>Comments</th>
            </tr>
          </thead>
          <RatedList {...this.props} />
        </table>
      </div>
    )
  }
}
