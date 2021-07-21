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
                  <NavLink to="/article/1" exact>Articles</NavLink>
                </li>
                <li>
                  <NavLink to="/game" exact>Game</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Sign in</NavLink>
                </li>
                <li><NavLink to="/register">Sign up</NavLink></li>
              </ul>
              <button type="button" className="md:hidden" onClick={() => toggle(!toggled)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          )}
          {toggled && (
            <button type="button" className="md:hidden" onClick={() => toggle(!toggled)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
                  fill="currentColor"
                />
                <path
                  d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
                  fill="currentColor"
                />
                <path
                  d="M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H5Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          )}
        </div>
        {/* </div> */}
      </nav>
    </div>
  )
}

export default TopBar
