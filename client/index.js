import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './redux'
import Main from './main'
import './main.scss'

const target = document.getElementById('root')

// ReactDOM.render(<Main />, target)
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  target,
)
