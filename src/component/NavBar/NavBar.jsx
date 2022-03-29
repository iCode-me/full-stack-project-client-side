import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.scss'

const NavBar = () => {
  return (
    <div className="nav-menu" data-testid="nav-menu">
      <Link className="nav-menu__item" to="/" data-testid="title">
        _courseology
      </Link>
      <Link className="nav-menu__item" to="/add-course" data-testid="add-course">
        Add course
      </Link>

    </div>
  )
}

export default NavBar