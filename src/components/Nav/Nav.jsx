import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

function Nav() {
  return (
    <nav>
        <Link to="/">Home</Link> &nbsp; | &nbsp;
        <Link to="/gallery">Gallery</Link>
    </nav>
  )
}

export default Nav