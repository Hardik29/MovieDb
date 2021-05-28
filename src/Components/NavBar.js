import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <ul className="flex bg-blue-100">
        <li className="mr-6 ml-3">
          <Link className="text-blue-500 hover:text-blue-800" to="/movies">Movies</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/customer">Customer</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/rentals">Rentals</Link>
        </li>
      </ul>
    )
}

export default NavBar
