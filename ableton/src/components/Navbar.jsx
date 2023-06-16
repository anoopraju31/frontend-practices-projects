import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { Logo, MoreDropdown } from './'
import { navItems } from '../utills/navbarItems'

const NavItem = ({ title, link}) => (
  <li>
      <a 
        className='text-base xl:text-lg font-medium' 
        href={link}
      > 
        { title }
      </a>
  </li>
)
const Navbar = () => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div>
      <nav className='p-5 flex justify-between items-center'>
        <div className='flex items-center gap-8'>
          <a href='/'>
            <Logo />
          </a>

          <div>
            <ul className='hidden lg:flex gap-5 xl:gap-8'>
              {
                navItems.map(({id, title, link, button}) => <NavItem key={id} title={title} link={link} button={button} />)
              }

              <li>
                <div 
                  className='flex items-center gap-2 text-base xl:text-lg font-medium text-orange-400 cursor-pointer' 
                  onClick={() => setShowMore(prev => !prev)}
                >
                  More 
                  <span className='text-xs xl:text-sm'> 
                    {showMore? <FaMinus /> : <FaPlus /> } 
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className='hidden lg:flex items-baseline gap-5'>
          <h2 className='text-sm xl:text-lg font-medium text-blue-700'>
            <a href="/"> Try Live for free </a>
          </h2>

          <a className='text-sm xl:text-base font-medium' href="/"> Log in or register </a>
        </div>
      </nav>

      <div className='hidden lg:block'>
        {showMore && <MoreDropdown />}
      </div>

      <div className='p-5 border-t-2 border-gray-200'>
        <ul className='flex gap-5'>
          <li>
            <a className='text-sm font-medium text-orange-400' href='/about'> About </a>
          </li>
          
          <li>
            <a className='text-sm font-medium' href='/jobs'> Jobs </a>
          </li>

          <li>
            <a className='text-sm font-medium' href='/apprenticeships'> Apprenticeships </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar