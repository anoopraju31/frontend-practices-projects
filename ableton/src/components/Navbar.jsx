import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import {GoTriangleUp, GoTriangleDown } from 'react-icons/go'
import { DropdownMenu, Logo, MoreDropdown } from './'
import { navItems } from '../utills/navbarItems'
import {useCurrentWidth} from '../hooks'
import { AnimatePresence, motion} from 'framer-motion'
import { textPop } from '../utills/animations'

const NavItem = ({ id, title, link}) => (
  <motion.li
    variants={textPop} 
    initial='start' 
    whileInView='stop' 
    transition={{ duration: 1, delay: 0.1 * id }}
  >
    <a 
      className='text-base xl:text-lg font-medium' 
      href={link}
    > 
      { title }
    </a>
  </motion.li>
)
const Navbar = () => {
  const [showMore, setShowMore] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const currentWidth = useCurrentWidth()

  return (
    <div className='relative'>
      <motion.nav 
        animate={{background: showMenu && (currentWidth < 1024)? 'rgb(29, 78, 216)' : '#fff'}}
        transition={{duration: 1}}
        className={`p-5 z-[1000] flex justify-start lg:justify-between items-center ${showMenu && (currentWidth < 1024) && 'bg-blue-700'}`}>
        <div className='flex items-center gap-8'>
          <motion.a 
            href='/'
            variants={textPop} 
            initial='start' 
            whileInView='stop' 
            transition={{ duration: 1 }}
          >
            <Logo isFillWhite={showMenu} />
          </motion.a>

          <div>
            <ul className='hidden lg:flex gap-5 xl:gap-8'>
              {
                navItems.map(({id, title, link, button}) => <NavItem key={id} id={id} title={title} link={link} button={button} />)
              }

              <motion.li
                variants={textPop} 
                initial='start' 
                whileInView='stop' 
                transition={{ duration: 1, delay: 0.7 }}
              >
                <div 
                  className='flex items-center gap-2 text-base xl:text-lg font-medium text-orange-400 cursor-pointer' 
                  onClick={() => setShowMore(prev => !prev)}
                >
                  More 
                  <span className='text-xs xl:text-sm'> 
                    {showMore? <FaMinus /> : <FaPlus /> } 
                  </span>
                </div>
              </motion.li>
            </ul>
          </div>
        </div>

        <div className='hidden lg:flex items-baseline gap-5 mr-6'>
          <motion.h2 
            variants={textPop} 
            initial='start' 
            whileInView='stop' 
            transition={{ duration: 1, delay: 0.8 }}
            className='text-sm xl:text-lg font-medium text-blue-700'>
            <a href="/"> Try Live for free </a>
          </motion.h2>

          <motion.a 
            variants={textPop} 
            initial='start' 
            whileInView='stop' 
            transition={{ duration: 1, delay: 0.9 }}
            className='text-sm xl:text-base font-medium' href="/"> Log in or register </motion.a>
        </div>

        <div className={`flex lg:hidden items-center gap-3 text-lg font-medium ${showMenu && 'text-white'}`} onClick={() => setShowMenu(prev => !prev)}>
            <span> Menu </span>
            {
              showMenu?
              <GoTriangleUp /> :
              <GoTriangleDown />
            }

        </div>
      </motion.nav>

      <div className='hidden lg:block'>
        <AnimatePresence>
          {showMore && <MoreDropdown />}
        </AnimatePresence>
      </div>

      <div className={`${showMenu && (currentWidth < 1024) && 'hidden'} w-full p-5 -z-50 bg-white border-t-2 border-gray-200`}>
        <ul className='flex gap-5'>
          <motion.li
            variants={textPop} 
            initial='start' 
            whileInView='stop' 
            transition={{ duration: 1, delay: 0.1}}
          >
            <a className='text-sm font-medium text-orange-400' href='/about'> About </a>
          </motion.li>
          
          <motion.li
            variants={textPop} 
            initial='start' 
            whileInView='stop' 
            transition={{ duration: 1, delay: 0.2}}
          >
            <a className='text-sm font-medium' href='/jobs'> Jobs </a>
          </motion.li>

          <motion.li
            variants={textPop} 
            initial='start' 
            whileInView='stop' 
            transition={{ duration: 1, delay: 0.3}}
          >
            <a className='text-sm font-medium' href='/apprenticeships'> Apprenticeships </a>
          </motion.li>
        </ul>
      </div>

      <AnimatePresence>
        {
          showMenu &&
          <DropdownMenu />
        }
      </AnimatePresence>
    </div>
  )
}

export default Navbar