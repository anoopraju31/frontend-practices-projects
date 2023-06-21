import React from 'react'
import { VscMenu } from 'react-icons/vsc'
import {NavLink, NavMarquee} from '.'
import { Logo } from './Logo'

const Navbar = () => {
    return (
        <div className=''>
            <nav className='px-hori-sm sm:px-hori-md lg:px-hori py-verti-sm sm:py-verti-md lg:py-verti flex'>
                <div className='flex lg:hidden flex-1 items-center'>
                    <span className=''>
                        <Logo />
                    </span>
                </div>
                <ul className='flex items-center gap-6'>
                    <div className='hidden sm:flex items-center gap-3 lg:gap-1 xl:gap-3'>
                        <NavLink link='/work' title='Work'/>
                        <NavLink link='/service' title='Service'/>
                        <NavLink link='/about' title='About'/>
                    </div>
                    <div className='block lg:hidden'> <VscMenu size={20} /> </div>
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
        </div>
    )
}

export default Navbar