import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './components/routes'
import TopBar from './components/topbar2'

const Main = () => {
  return (
    // <Provider store={store}>
    <div className="bg-gray-200 text-indigo-600">
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </div>
    // </Provider>
  )
}
export default Main

// const target = document.getElementById('root')

// ReactDOM.render(<Home />, target)
