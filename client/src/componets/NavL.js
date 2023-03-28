import React from 'react'
import { Link } from "react-router-dom";
function NavL() {
  return (
    <nav>
      <ul>
        <li>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
        </li>

      </ul>

    </nav>
  )
}

export default NavL