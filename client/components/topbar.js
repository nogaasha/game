import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

// import RightMenu from './rightMenu'

const navigation = [
  { name: 'Game', href: 'game', current: true },
  { name: 'Articles', href: 'articles', current: false },
  { name: 'Projects', href: 'project', current: false },
  { name: 'Calendar', href: 'calendar', current: false },
]

const TopBar = () => {
  // const { username } = useParams()
  const [toggled, toggle] = useState(false)
  const [toggledRight, toggleRight] = useState(false)
  useEffect(() => {
    console.log(toggledRight);
  }, [toggledRight])
  return (
    <nav className="bg-gray-800 text-white p-2">
      <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button type="button" className="md:hidden" onClick={() => toggle(!toggled)}>
            <span className="sr-only">Open main menu</span>
            {toggled
              ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor" />
                </svg>
              )
              : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z" fill="currentColor" />
                  <path d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z" fill="currentColor" />
                  <path d="M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H5Z" fill="currentColor" />
                </svg>
              )}
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <svg className="w-auto h-8" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1254 13H10.1254V15H14.1254V13Z" fill="currentColor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M8.12537 13C9.22994 13 10.1254 12.1046 10.1254 11C10.1254 9.89543 9.22994 9 8.12537 9C7.0208 9 6.12537 9.89543 6.12537 11C6.12537 12.1046 7.0208 13 8.12537 13ZM8.12537 11.5C8.40151 11.5 8.62537 11.2761 8.62537 11C8.62537 10.7239 8.40151 10.5 8.12537 10.5C7.84922 10.5 7.62537 10.7239 7.62537 11C7.62537 11.2761 7.84922 11.5 8.12537 11.5Z" fill="currentColor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M18.1254 11C18.1254 12.1046 17.2299 13 16.1254 13C15.0208 13 14.1254 12.1046 14.1254 11C14.1254 9.89543 15.0208 9 16.1254 9C17.2299 9 18.1254 9.89543 18.1254 11ZM16.6254 11C16.6254 11.2761 16.4015 11.5 16.1254 11.5C15.8492 11.5 15.6254 11.2761 15.6254 11C15.6254 10.7239 15.8492 10.5 16.1254 10.5C16.4015 10.5 16.6254 10.7239 16.6254 11Z" fill="currentColor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M2.74884 14.6663C3.73056 16.6421 5.76939 18 8.12537 18H16.1254C18.5654 18 20.6652 16.5435 21.6029 14.4525C22.3722 13.9093 22.8746 13.0133 22.8746 12C22.8746 10.9867 22.3722 10.0907 21.6029 9.54753C20.6652 7.45651 18.5654 6 16.1254 6H8.12537C5.76939 6 3.73056 7.3579 2.74884 9.33375C1.78448 9.83263 1.12537 10.8393 1.12537 12C1.12537 13.1607 1.78448 14.1674 2.74884 14.6663ZM8.12537 8H16.1254C17.5088 8 18.7282 8.70234 19.4465 9.76991C19.7227 10.4593 19.8746 11.2119 19.8746 12C19.8746 12.7881 19.7227 13.5407 19.4465 14.2301C18.7282 15.2977 17.5088 16 16.1254 16H8.12537C5.91623 16 4.12537 14.2091 4.12537 12C4.12537 9.79086 5.91623 8 8.12537 8Z" fill="currentColor" />
              </svg>
            </Link>
          </div>
          {/* menu desktop  */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <div key={item.name} className="hover:text-red-200 block px-4 py-2 text-sm text-blue-200">
                  <NavLink to={`/${item.href}`}>{item.name}</NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="ml-3 relative">
          <button
            type="button"
            onClick={() => toggleRight(!toggledRight)}
            className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              src=""
              alt=""
            />
          </button>

        </div>
      </div>
      {/* left drop menu */}
      {
        toggled
        && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name} className="hover:text-red-200 block px-4 py-2 text-sm text-gray-100">
                  <NavLink to={`/${item.href}`}>{item.name}</NavLink>
                </div>
              ))}
            </div>
          </div>
        )
      }
      {/* right droped menu */}
      <div>
        {
          toggledRight
          && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Link to="/" className="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700" onClick={() => toggleRight(!toggledRight)}>
                Your Profile
              </Link>
              <Link to="/login" className="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700" onClick={() => toggleRight(!toggledRight)}>
                Sing in
              </Link>
              <Link to="/register" className="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700" onClick={() => toggleRight(!toggledRight)}>
                Sign out
              </Link>
            </div>
          )
        }
      </div>
    </nav>
  )
}

export default TopBar
