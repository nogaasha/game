import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const TopBar = () => {
  const [toggled, toggle] = useState(true)
  return (
    <div>
      <nav className="bg-gray-800 text-white p-2">
        <div className="relative flex items-center justify-between h-16">
          {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"> */}
          <Link to="/">Medium</Link>
          <div>{toggled}</div>
          {toggled && (
            <div className="fixed top-0 p-4 right-0 h-screen w-1/2 flex justify-between items-start md:w-auto md:relative md:h-auto md:bg-transparent md:p-0 md:block">
              <ul className="md:flex md:space-x-4">
                <li>
                  <NavLink to="/articles">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Sign in</NavLink>
                </li>
                <li><NavLink to="/register">Sign up</NavLink></li>
              </ul>
              <button type="button" className="md:hidden" onClick={() => toggle(!toggled)}>
                Menu
              </button>
            </div>
          )}
          {toggled && (
            <button type="button" className="md:hidden" onClick={() => toggle(!toggled)}>
              Menu1
            </button>
          )}
        </div>
        {/* </div> */}
      </nav>
    </div>
  )
}

export default TopBar
