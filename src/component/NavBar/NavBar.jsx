import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link className="nav-menu__item" to="/">
        _courseology
      </Link>
      <Link className="nav-menu__item" to="/">
      </Link>
    </div>
  )
}

export default NavBar