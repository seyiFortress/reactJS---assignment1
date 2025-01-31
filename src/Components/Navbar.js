import React from 'react'
import BrandName from './BrandName'
import NavList from './NavList'

function Navbar() {
  return (
    <nav id='navbar'>
      <BrandName brand$name='Groot' link='#'/>
      <NavList firstNavItem='About' firstLink='#' secondNavItem='FAQ' secondLink='#'/>
    </nav>
  )
}

export default Navbar
