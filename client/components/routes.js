import React from 'react'
import { Switch, Route } from 'react-router-dom'

import GlobalFeed from './globalfeed/index'
import Article from './article'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <GlobalFeed />} />
      <Route exact path="/articles" component={() => <Article />} />
    </Switch>
  )
}
export default Routes
