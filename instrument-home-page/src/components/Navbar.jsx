import React from 'react'
import {NavLink, NavMarquee} from '.'

const Navbar = () => {
    return (
        <div className=''>
            <nav className='px-hori py-verti flex'>
                <ul className='flex items-center gap-3'>
                    <NavLink link='/work' title='Work'/>
                    <NavLink link='/service' title='Service'/>
                    <NavLink link='/about' title='About'/>
                </ul>

                <div className='flex-1'>
                    <NavMarquee />
                </div>

                <ul className='flex items-center gap-3'>
                    <NavLink link='/careers' title='careers'/>
                    <NavLink link='/latest' title='latest'/>
                    <NavLink link='/contact' title='contact'/>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar