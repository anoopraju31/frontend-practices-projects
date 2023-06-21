import React from 'react'
import { VscMenu } from 'react-icons/vsc'
import {NavLink, NavMarquee} from '.'

const Navbar = () => {
    return (
        <div className=''>
            <nav className='px-hori py-verti flex'>
                <ul className='flex items-center gap-6'>
                    <NavLink link='/work' title='Work'/>
                    <NavLink link='/service' title='Service'/>
                    <NavLink link='/about' title='About'/>
                    <div className='block lg:hidden'> <VscMenu size={20} /> </div>
                </ul>

                <div className='hidden lg:block flex-1'>
                    <NavMarquee />
                </div>

                <ul className='hidden lg:flex items-center gap-3'>
                    <NavLink link='/careers' title='careers'/>
                    <NavLink link='/latest' title='latest'/>
                    <NavLink link='/contact' title='contact'/>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar