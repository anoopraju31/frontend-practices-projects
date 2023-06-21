import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'

const NavMenu = ({title, link}) => {
  return (
    <li className=' flex justify-between items-center border-b-2 border-gray-700 text-menu-sm sm:text-menu-lg'>
      <a className='' href={link}> {title} </a>
      <HiArrowLongRight/>
    </li>
  )
}

export default NavMenu