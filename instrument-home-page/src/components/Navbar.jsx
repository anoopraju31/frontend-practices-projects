import React, { useState } from 'react'
import { VscMenu } from 'react-icons/vsc'
import {NavLink, NavMarquee} from '.'
import { Logo } from './Logo'
import { useCurrentWidth } from '../hooks'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const currentWidth = useCurrentWidth()

    const toggleMenu = () => setOpenMenu(prev => !prev)

    return (
        <div className=''>
            <nav className='px-hori-sm sm:px-hori-md lg:px-hori py-verti-sm sm:py-verti-md lg:py-verti flex'>
                <div className='flex lg:hidden flex-1 items-center'>
                    <span className=''>
                        <Logo />
                    </span>
                </div>
                <ul className='flex items-center gap-6'>
                    {
                        (!openMenu || (currentWidth >= 1024)) && 
                        <div className='hidden sm:flex items-center gap-3 lg:gap-1 xl:gap-3'>
                            <NavLink link='/work' title='Work'/>
                            <NavLink link='/service' title='Service'/>
                            <NavLink link='/about' title='About'/>
                        </div>
                    }
                    <div className='block lg:hidden py-1' onClick={toggleMenu}> <VscMenu size={23} /> </div>
                </ul>

                <div className='hidden lg:block flex-1'>
                    <NavMarquee />
                </div>

                <ul className='hidden lg:flex items-center lg:gap-1 xl:gap-3'>
                    <NavLink link='/careers' title='careers'/>
                    <NavLink link='/latest' title='latest'/>
                    <NavLink link='/contact' title='contact'/>
                </ul>
            </nav>

            <div className='hidden lg:block px-hori'>
                <Logo isMainLogo={true} />
            </div>

            {
                openMenu &&
                <div className='block lg:hidden min-h-menu-height-sm sm:min-h-menu-height-md w-full bg-black'></div>
            }
        </div>
    )
}

export default Navbar