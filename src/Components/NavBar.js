import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <ul className="flex bg-blue-100">
        <li className="mr-6 ml-3">
          <Link className="text-blue-500 hover:text-blue-800" to="/movies">Home</Link>
        </li>
        <li className="mr-6 ml-3">
          <NavLink className="text-blue-500 hover:text-blue-800" to="/movies">Movies</NavLink>
        </li>
        <li className="mr-6">
          <NavLink className="text-blue-500 hover:text-blue-800" to="/customer">Customer</NavLink>
        </li>
        <li className="mr-6">
          <NavLink className="text-blue-500 hover:text-blue-800" to="/rentals">Rentals</NavLink>
        </li>
      </ul>
    )
}

export default NavBar
