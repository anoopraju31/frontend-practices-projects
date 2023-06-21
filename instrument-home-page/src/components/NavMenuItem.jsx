import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'

const NavMenu = ({title, link, current}) => {
  return (
    <li className={`flex justify-between items-center border-b-2 border-gray-700 text-menu-sm sm:text-menu-lg ${current? 'text-black' : 'text-gray-600'}`}>
      <a className='' href={link}> {title} </a>
      <HiArrowLongRight/>
    </li>
  )
}

export default NavMenu