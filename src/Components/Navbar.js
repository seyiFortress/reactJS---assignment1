import React from 'react'
import BrandName from './BrandName'
import NavList from './NavList'

function Navbar() {
  return (
    <nav id='navbar'>
        <BrandName brand$name='Groot' link='/Home'/>
        <NavList firstNavItem='About' firstLink='/About' secondNavItem='FAQ' secondLink='/FAQ'/>
    </nav>
  )
}

export default Navbar
