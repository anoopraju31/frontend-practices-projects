import React from 'react'
import { Logo } from './'

const Navbar = () => {
  return (
    <div className="bg-black">
        <nav className='max-w-[1400px] h-[88px] mx-auto flex items-center'>
        {/* logo */}
        <div className='flex gap-3 text-white text-xl font-medium'>
            <div className='group w-[110px] flex hover:text-gray-400'>
                <Logo />
                <span> Abstract </span>
            </div>

            <div className='px-1 border-l-2 border-l-white'>
                Help Center
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar