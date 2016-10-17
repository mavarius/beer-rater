import React, { Component } from 'react'

export default class Layout extends Component {
  render () {
    return (
      <div className="container">
        <h1>Beer Rater</h1>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    )
  }
}
