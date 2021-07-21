import React from 'react'
import { Switch, Route } from 'react-router-dom'

import GlobalFeed from './globalfeed/index'
import Article from './article'
import Game from './game'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <GlobalFeed />} />
      <Route exact path="/articles" component={() => <Article />} />
      <Route exact path="/game" component={() => <Game />} />
    </Switch>
  )
}
export default Routes
