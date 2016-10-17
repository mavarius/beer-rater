import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import BeerRater from './components/BeerRater'

render(
  <Router history={browserHistory}>

    <Route path="/" component={Layout}>
      <IndexRoute component={BeerRater} />
    </Route>

  </Router>,
  document.getElementById('root')
)
