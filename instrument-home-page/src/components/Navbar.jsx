import React from 'react'
import {NavLink} from '.'

const Navbar = () => {
    return (
        <div className=' bg-orange-300'>
            <nav className='px-hori py-verti flex'>
                <div className='flex items-center gap-3'>
                    <NavLink />
                    <NavLink />
                    <NavLink />
                </div>


                <div className='flex items-center gap-3'>
                    <NavLink />
                    <NavLink />
                    <NavLink />
                </div>
            </nav>
        </div>
    )
}

export default Navbar