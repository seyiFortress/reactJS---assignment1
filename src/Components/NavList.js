import React from 'react'

const NavList = ({firstNavItem, secondNavItem, thirdNavItem, forthNavItem, firstLink, secondLink, thirdLink, forthLink}) => {
  return (
    <ul id='nav-list'>
      <li className='nav-item'>
        <a href={firstLink}>{firstNavItem}</a>
      </li>
      <li className='nav-item'>
        <a href={secondLink}>{secondNavItem}</a>
      </li>
      <li className='nav-item'>
        <a href={thirdLink}>{thirdNavItem}</a>
      </li>
      <li className='nav-item'>
        <a href={forthLink}>{forthNavItem}</a>
      </li>
    </ul>
  )
}

export default NavList
